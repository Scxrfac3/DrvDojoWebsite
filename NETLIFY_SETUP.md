# Netlify Setup Guide for Stripe Integration

## Environment Variables Configuration

To make the Stripe payment integration work correctly, you need to set up the following environment variables in your Netlify dashboard:

### 1. Stripe Secret Key
This is required for the Netlify functions to create and retrieve checkout sessions.

**Variable Name:** `STRIPE_SECRET_KEY`
**Value:** `sk_test_51S6EZwDwpTXQ4PFJfdDAGrbbAAHddYajLJRPqzRXqbCnMFn3eyGi3Aw3TuMtzvg5N38iz7LjQmI9bSKVtx5IUo2q00aUYjEmmI`

### 2. Stripe Publishable Key (for frontend)
This is used by the frontend to initialize Stripe.js.

**Variable Name:** `VITE_STRIPE_PUBLISHABLE_KEY`
**Value:** `pk_test_51S6EZwDwpTXQ4PFJLdvKNdpTEXWlUypGmPrrIZOpD4kCnXWFbfRntEpbCY6TCz3mF4yC3sRm2yroUIKeeGPNxzLT00Dny18chv`

## How to Set Up Environment Variables in Netlify

1. Go to your Netlify dashboard and select your site
2. Navigate to **Site settings** > **Build & deploy** > **Environment**
3. Click **Edit variables**
4. Add the environment variables listed above
5. Click **Save**

## Deployment Instructions

After setting up the environment variables, you need to redeploy your site for the changes to take effect:

1. Go to the **Deploys** tab in your Netlify dashboard
2. Click **Trigger deploy** > **Deploy site**
3. Wait for the deployment to complete

## Testing the Checkout Flow

After deployment, test the checkout flow:

1. Visit your booking page
2. Select a package with a Stripe price ID
3. Click "Pay Now"
4. You should be redirected to the Stripe Checkout page
5. Complete the test payment using Stripe's test card numbers:
   - Card number: 4242 4242 4242 4242
   - Expiry date: Any future date
   - CVC: Any 3 digits
   - ZIP: Any 5 digits

## Troubleshooting

If you still encounter issues:

1. Check the Netlify function logs in the dashboard under **Functions** > **create-checkout-session**
2. Ensure all environment variables are correctly set
3. Verify that the redirect rules in `netlify.toml` are properly configured and in the correct order (API redirects must come BEFORE the catch-all redirect)
4. Check the browser console for any errors
5. Make sure you've redeployed your site after making changes to environment variables or redirect rules

## SuperSaaS Integration

The SuperSaaS integration is already configured in the `BookingSuccess.tsx` file with the API key:
`https://www.supersaas.com/schedule/drive_dojo/Driving_Lessons?api_key=y2Qp49ZINgve0gtnEkz4IA`

This allows customers to schedule their lessons after completing the payment.