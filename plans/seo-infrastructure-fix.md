# SEO Infrastructure Audit & Fix Plan

## Current Issues Identified

### Issue 1: Prerender Timeouts → 5xx / "Crawled - Not Indexed"

**Root Cause**: The SPA catch-all in `netlify.toml` (`/*` → `/index.html` with `status = 200`) serves the full JS app shell for every route. The Netlify Prerender Extension tries to execute all JS before serving the snapshot. If rendering is slow (heavy React components, animations, lazy loading), the prerenderer times out and serves a blank/partial page → Google sees 5xx.

**Fix**:
1. Remove unused `vite-prerender-plugin` from `package.json` (not configured in `vite.config.ts`, so it does nothing)
2. Audit the existing Netlify Prerender Extension setup (user must verify via Netlify Dashboard)
3. Add `<link rel="preload">` hints in `index.html` for critical resources to speed perceived load
4. Reduce initial bundle: ensure lazy imports are effective and critical CSS is inline

### Issue 2: Trailing Slash Redirect Loop

**Root Cause**: In `netlify.toml` the trailing slash redirect rule has:
```
[[redirects]]
  from = "/*/"
  to = "/:splat"
  status = 301
  force = true
  conditions = {Language = []}
```

The `conditions = {Language = []}` means "only apply if the Language header is EMPTY". Googlebot often omits the Language header entirely rather than sending an empty one. When no header is present at all, the condition check may fail and the redirect doesn't fire. This means:
- `/page/` (with trailing slash) is served via the SPA catch-all
- React Router may handle it differently than `/page`
- Google sees duplicate content or gets stuck in a loop

**Fix**: Remove the `conditions = {Language = []}` constraint. The trailing slash redirect should apply universally.

### Issue 3: Self-Referencing Canonical Tags

**Root Cause**: `index.html` has a hardcoded:
```html
<link rel="canonical" href="https://drivedojodrivingschool.com/" />
```

This is WRONG for every subpage. The `<SEO>` component tries to override it client-side via `useEffect`, but:
- Prerendered HTML is served before JS executes
- Googlebot may see the WRONG canonical (homepage URL) on every page
- `useEffect` runs after paint — too late for prerenderer and potentially for Googlebot

**Fix**:
1. Remove hardcoded canonical from `index.html`
2. Replace with a `<link id="canonical-tag">` placeholder
3. Add a `useInsertionEffect` (fires synchronously before DOM mutations) or use `document.title = ...` approach in render
4. Actually, the simplest and most reliable fix: keep `useEffect` but also set a default placeholder. The key insight is that the Prerenderer DOES execute JavaScript and wait for it to complete. So the canonical WILL be set if:
   - The page renders fast enough (addressed in Issue 1)
   - We move from `useEffect` to a synchronous approach

**Better approach**: 
- Delete hardcoded canonical from `index.html`
- In each page component, inject canonical BEFORE the useEffect runs by using `document.head` directly
- Or simplest: add `<link rel="canonical" href="" />` with empty href as placeholder in `index.html`

### Issue 4: 76 "Discovered - Currently Not Indexed" Pages

**Root Cause**: These are hub-and-spoke pages (`/driving-test-centres/*`, `/learn-to-drive/*`, `/blog/*`), specialty service pages, and potentially some location pages. Google found them in the sitemap but hasn't crawled them because:
1. Crawl budget is limited (Google prioritizes well-linked pages)
2. Some pages may only be linked via JavaScript navigation (not standard `<a>` tags)
3. Prerender timeouts (Issue 1) make Google less likely to revisit

**Fix**:
1. Add a "Service Areas" or "Resources" footer section with explicit `<a href>` links to ALL hub-and-spoke pages
2. Create a `/sitemap` page with links to every page (usable by both users and Googlebot)
3. Ensure blog articles cross-link to related location pages and vice versa
4. Add location page links in the hero section or sidebar of blog articles

## Implementation Plan (Execution Order)

### Step 1: Fix netlify.toml (Redirect Loop Fix)
File: `netlify.toml`
- Remove `conditions = {Language = []}` from trailing slash redirect rule (line 84)
- Change from `status = 301` to `status = 302` temporarily to test without permanent damage
- Comment: "Googlebot omits Language header → redirect never fires → loop"

### Step 2: Fix Canonical Tag (All Pages)
File: `index.html`
- Remove: `<link rel="canonical" href="https://drivedojodrivingschool.com/" />` (line 56-59)
- Replace with placeholder: `<link id="canonical-tag" rel="canonical" href="https://drivedojodrivingschool.com/" />` with ID for easy targeting

File: `src/components/ui/SEO.tsx`
- Change `useEffect` to synchronous canonical tag injection
- On mount, immediately set canonical via `document.getElementById('canonical-tag')?.setAttribute('href', canonical)`
- This happens BEFORE the prerenderer snapshot is taken

### Step 3: Build a Sitemap Index Page
New file: `src/components/pages/SitemapPage.tsx`
- A HTML sitemap with `<a>` links to EVERY page on the site
- Grouped by category: Main Pages, Location Pages, Blog Articles, Test Centres, Learn to Drive, Services
- Add route to App.tsx
- Link from footer

### Step 4: Internal Linking Upgrades
File: `src/components/layout/Footer.tsx`
- Add a "Resources" column with links to: Test Centres, Learn to Drive, Show Me Tell Me, Specialty Services
- Link to the new Sitemap page

File: `src/components/sections/PostcodesSection.tsx`
- Already has good `<Link>` tags. Ensure `bg-[#ff6b35]` hardcoded colors use `primary` Tailwind class

### Step 5: Speed Up Initial Render (Prerender Timeout Prevention)
- Ensure lazy loading is effective
- The built site already has lazy routes via `React.lazy()` — good
- Consider adding `preload` hints for critical chunks in `index.html`

### Step 6: Verify Prerender Extension (User Action)
- User checks Netlify Dashboard → Extensions → Verify "Prerender" extension is installed AND active
- NOT the legacy "Prerender" checkbox in Site Settings → Build & Deploy
- The extension should show as "installed" with green status

## Files to Modify

| File | Change |
|------|--------|
| `netlify.toml` | Remove `conditions = {Language = []}` from trailing slash redirect |
| `index.html` | Remove hardcoded canonical, add placeholder with ID |
| `src/components/ui/SEO.tsx` | Use synchronous canonical injection + keep useEffect for other meta |
| `src/components/pages/SitemapPage.tsx` | **NEW** — HTML sitemap with links to all pages |
| `src/App.tsx` | Add `/sitemap` route |
| `src/components/layout/Footer.tsx` | Add Resources column + Sitemap link |
| `src/components/home.tsx` | Ensure PostcodesSection is present |

## Mermaid Diagram: Current vs Fixed Request Flow

```mermaid
flowchart TD
    GB[Googlebot] --> NR[Netlify Edge]
    NR --> PE{Prerender Extension Active?}
    PE -->|Yes| PR[Prerender Service]
    PR -->|Render JS| HTML[Static HTML Snapshot]
    HTML -->|Serve to Googlebot| IDX[Indexed]
    PE -->|No| RAW[Raw index.html SPA shell]
    RAW -->|No content| ERR[5xx / Crawled Not Indexed]
    
    GB --> TS{Trailing Slash?}
    TS -->|/page/| R301{Redirect Fires?}
    R301 -->|Condition failed| CATCH[SPA Catch-all serves index.html]
    R301 -->|Fixed: redirect works| CLEAN[/page no slash]
    CATCH -->|Google sees 2 URLs| DUP[Duplicate Content]
    
    GB --> CAN{Canonical Tag}
    CAN -->|Hardcoded to / in HTML| WRONG[Wrong canonical on every page]
    CAN -->|Fixed: page-specific| RIGHT[Correct canonical per page]