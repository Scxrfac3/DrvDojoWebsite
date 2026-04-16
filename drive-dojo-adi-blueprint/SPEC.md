# Drive Dojo - ADI Blueprint Sales Page Specification

## Concept & Vision

A direct-response sales landing page following the proven "Hook, Story, Offer" framework. The page creates urgency around the franchise trap pain point, establishes authority through a relatable founder story, and converts visitors with a clear, compelling offer. Premium dark aesthetic with Tron-style neon accents communicates professionalism and modern entrepreneurship.

## Design Language

### Aesthetic Direction
Premium dark-mode tech aesthetic inspired by modern fintech/SaaS landing pages. Think Tron meets high-end coaching programs. Bold typography, generous whitespace, strategic use of glowing accent colors for CTAs.

### Color Palette
- **Background Deep**: `#0a0a0a` (primary background)
- **Background Medium**: `#111111` (card backgrounds)
- **Background Light**: `#1a1a1a` (elevated elements)
- **Tron Yellow**: `#ffd700` (primary CTA, highlights)
- **Brand Red**: `#e63946` (secondary accent, urgency)
- **Success Green**: `#4ade80` (checkmarks, savings)
- **Text Primary**: `#ffffff` (headlines)
- **Text Secondary**: `#e0e0e0` (body text)
- **Text Muted**: `#888888` (secondary info)

### Typography
- **Display Font**: `Orbitron` - Headlines, CTAs, price points
- **Heading Font**: `Rajdhani` - Section titles, card headers
- **Body Font**: `Inter` - Body text, descriptions
- **Fallbacks**: system-ui, sans-serif

### Spatial System
- Container max-width: 1200px
- Section padding: 80px vertical (desktop), 48px (mobile)
- Card padding: 32px
- Grid gaps: 24px-32px
- Border radius: 16px (cards), 30px (buttons)

### Motion Philosophy
- Scroll-triggered fade-up animations (300ms ease-out)
- Hover state transitions (200ms ease)
- Glow effects on CTAs (subtle pulse)
- Smooth scroll behavior
- No distracting animations - focus on conversion

### Visual Assets
- **Icons**: Font Awesome 6 (solid style)
- **Images**: Placeholder areas for headshot, product mockup
- **Decorative**: Subtle gradient overlays, glowing borders on CTAs

## Layout & Structure

### Page Flow
1. **Hero Section** - Immediate hook with pain point headline
2. **Problem Agitation** - Franchise trap details
3. **Story Section** - Founder's journey (relatable authority)
4. **Offer Breakdown** - Blueprint features with icons
5. **Value Anchor** - Cost comparison (franchise vs Blueprint)
6. **Upsell Section** - DFY services (premium feel)
7. **Social Proof** - Testimonials and credibility
8. **FAQ Section** - Objection handling
9. **Final CTA** - Urgency + buy button
10. **Footer** - Minimal, clean

### Responsive Strategy
- Mobile-first CSS
- Breakpoints: 768px (tablet), 1024px (desktop)
- Stacked layouts on mobile, side-by-side on desktop
- Touch-friendly tap targets (min 44px)

## Features & Interactions

### Core Features
1. **Sticky Header** - Logo + CTA button (appears on scroll)
2. **Smooth Scroll Navigation** - Anchor links to sections
3. **Accordion FAQ** - Click to expand/collapse
4. **Payment Integration** - Stripe checkout button
5. **Calendly Embed** - DFY consultation booking
6. **Analytics Tracking** - Facebook Pixel + Google Analytics

### Interaction Details
- **CTA Buttons**: Glow effect on hover, scale 1.02
- **FAQ Items**: Chevron rotates on expand, smooth height transition
- **Scroll Animations**: Elements fade in as they enter viewport
- **Sticky Header**: Slides in after 500px scroll

### Edge Cases
- JavaScript disabled: Page still readable (progressive enhancement)
- Slow connection: Skeleton states not needed (static page)
- Payment failure: Redirect to support contact

## Component Inventory

### Hero Section
- Pre-headline badge (neon yellow)
- Main headline (h1, Orbitron, large)
- Sub-headline (Rajdhani, medium)
- Primary CTA button (neon yellow with glow)
- Trust indicators (optional)

### Pain Point Cards
- Dark background with red left border
- Icon + title + description
- Hover: subtle lift effect

### Story Card
- Large quote styling
- Headshot placeholder (circular)
- Founder name + credentials
- Quote in large italic text

### Feature Cards
- Icon (neon yellow)
- Title (Rajdhani)
- Description (Inter)
- Checkmark list items

### Pricing Comparison
- Two columns: Franchise vs Blueprint
- Strike-through prices for franchise
- Highlighted savings amount
- Arrow pointing to Blueprint

### DFY Service Card
- Premium styling (gold border)
- Service icon
- Feature list
- Calendly CTA button

### Testimonial Cards
- 5-star rating display
- Quote text
- Author name + role
- Optional avatar

### FAQ Accordion
- Question (clickable)
- Answer (collapsible)
- Plus/minus icon indicator
- Smooth expand animation

### CTA Buttons
- **Primary (Yellow)**: Main buy button, glow effect
- **Secondary (Red)**: Urgency CTAs
- **Tertiary (Outline)**: Secondary actions

## Technical Approach

### Stack
- Pure HTML5, CSS3, Vanilla JavaScript
- No build tools required
- Single HTML file with embedded styles
- External CDN for fonts/icons

### Third-Party Integrations
- **Stripe**: Buy button links to Stripe Checkout
- **Calendly**: Inline embed for consultation booking
- **Facebook Pixel**: Head tracking code
- **Google Analytics**: GA4 tracking code

### Performance
- Lazy load Calendly widget
- Minimal JavaScript footprint
- Optimized CSS (no unused styles)
- Preconnect to Google Fonts

### File Structure
```
/workspace/
├── index.html (landing page)
├── SPEC.md (this file)
```
