// Stripe Checkout Service
// Handles creating checkout sessions for the ADI Blueprint

const API_BASE = '/api';

export interface CheckoutResult {
  sessionId?: string;
  error?: string;
}

export async function createBlueprintCheckout(email?: string): Promise<CheckoutResult> {
  try {
    // Get the Stripe Price ID from environment
    const priceId = import.meta.env.VITE_STRIPE_BLUEPRINT_PRICE_ID;
    
    if (!priceId) {
      console.error('Missing VITE_STRIPE_BLUEPRINT_PRICE_ID');
      return { error: 'Payment not configured. Please contact support.' };
    }

    const response = await fetch(`${API_BASE}/create-checkout-session`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        priceId,
        packageName: 'ADI Blueprint',
        customerEmail: email,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return { error: data.error || 'Failed to create checkout session' };
    }

    return { sessionId: data.id };
  } catch (error) {
    console.error('Checkout error:', error);
    return { error: 'Network error. Please try again.' };
  }
}

export async function redirectToStripeCheckout(sessionId: string): Promise<void> {
  // For embedded checkout or redirect-based
  const stripe = await import('@stripe/stripe-js');
  const stripePromise = stripe.loadStripe(
    import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || ''
  );
  
  const stripeInstance = await stripePromise;
  if (stripeInstance) {
    // Redirect to Stripe Checkout
    const { error } = await stripeInstance.redirectToCheckout({ sessionId });
    if (error) {
      console.error('Stripe redirect error:', error);
      throw error;
    }
  }
}

// Verify checkout session status
export async function verifyCheckoutSession(sessionId: string): Promise<{
  success: boolean;
  customerEmail?: string;
}> {
  try {
    const response = await fetch(
      `${API_BASE}/get-checkout-session?session_id=${sessionId}`
    );
    
    if (!response.ok) {
      return { success: false };
    }

    const data = await response.json();
    
    return {
      success: data.status === 'complete',
      customerEmail: data.customer_email,
    };
  } catch (error) {
    console.error('Session verification error:', error);
    return { success: false };
  }
}
