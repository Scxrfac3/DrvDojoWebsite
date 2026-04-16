# ADI Blueprint Setup Guide

This document explains how to set up the ADI Blueprint payment and access system.

## Overview

The system allows you to sell the ADI Blueprint course for £49 using Stripe Checkout, with Supabase handles authentication via magic links.

## Setup Steps

### 1. Create Stripe Product

1. Log in to your [Stripe Dashboard](https://dashboard.stripe.com)
2. Go to **Products** → **Add Product**
3. Create a new product:
   - **Name**: ADI Blueprint
   - **Price**: £49.00 (one-time)
   - **Billing**: One-time payment
4. Copy the **Price ID** (starts with `price_`)
5. Add to your `.env` file:
   ```
   VITE_STRIPE_BLUEPRINT_PRICE_ID=price_xxx
   ```

### 2. Set Up Stripe Webhook

1. Go to **Developers** → **Webhooks**
2. Click **Add endpoint**
3. Configure:
   - **Endpoint URL**: `https://yourdomain.com/api/stripe-webhook`
   - **Events**: `checkout.session.completed`
4. Copy the **Webhook Signing Secret** (starts with `whsec_`)
5. Add to your `.env` file:
   ```
   STRIPE_WEBHOOK_SECRET=whsec_xxx
   ```

### 3. Configure Supabase

1. Go to your [Supabase Dashboard](https://supabase.com)
2. Navigate to **Authentication** → **Providers** → **Email**
3. Enable **Magic Link**
4. Set the **Site URL** to your domain
5. Add the redirect URL for magic links

### 4. Create Database Tables (Optional)

If you want to track purchases in your database:

```sql
-- Create purchases table
CREATE TABLE purchases (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id),
  email TEXT NOT NULL,
  stripe_session_id TEXT,
  stripe_payment_intent TEXT,
  amount_paid INTEGER,
  currency TEXT,
  product TEXT NOT NULL,
  purchased_at TIMESTAMPTZ DEFAULT NOW(),
  access_granted BOOLEAN DEFAULT true
);

-- Create index for faster lookups
CREATE INDEX idx_purchases_email ON purchases(email);
CREATE INDEX idx_purchases_user_id ON purchases(user_id);
```

## Environment Variables

Required in `.env`:

```env
# Supabase (already configured)
VITE_SUPABASE_URL=https://xxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJxxx

# Stripe (already configured for driving lessons)
VITE_STRIPE_PUBLISHABLE_KEY=pk_live_xxx
VITE_STRIPE_PUBLISHABLE_KEY=pk_live_xxx
STRIPE_SECRET_KEY=sk_live_xxx

# NEW - For ADI Blueprint
VITE_STRIPE_BLUEPRINT_PRICE_ID=price_xxx
STRIPE_WEBHOOK_SECRET=whsec_xxx
```

## Routes Created

| Route | Description |
|-------|-------------|
| `/adi-blueprint` | Sales landing page with Stripe Checkout |
| `/login` | Magic link login page |
| `/academy/adi-blueprint` | Protected content (requires login) |
| `/access-denied` | Shown when user tries to access without purchase |

## User Flow

1. User visits `/adi-blueprint`
2. Enters email and clicks "Get Instant Access — £49"
3. Redirected to Stripe Checkout
4. Pays £49
5. Stripe sends webhook to `/api/stripe-webhook`
6. Webhook stores purchase record
7. User receives magic link email
8. User clicks magic link → redirected to `/academy/adi-blueprint`
9. User sees full ADI Blueprint content

## Files Created

- `src/lib/auth.tsx` - Supabase auth context and hooks
- `src/lib/stripe.ts` - Stripe checkout service
- `src/components/ProtectedRoute.tsx` - Auth guard component
- `src/components/pages/ADILandingPage.tsx` - Sales page
- `src/components/pages/AcademyPage.tsx` - Protected content
- `src/components/pages/LoginPage.tsx` - Magic link login
- `src/components/pages/AccessDeniedPage.tsx` - Access denied page
- `netlify/functions/stripe-webhook.js` - Webhook handler

## Testing Locally

1. Start the dev server:
   ```bash
   npm run dev
   ```
2. Visit `http://localhost:5173/adi-blueprint`
3. Enter an email and click purchase
4. Check Stripe dashboard for the test payment

## Going Live

1. Update `.env` with production keys
2. Set Stripe webhook URL to production domain
3. Deploy to Netlify
4. Test the full flow end-to-end
