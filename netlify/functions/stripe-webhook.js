const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const { createClient } = require('@supabase/supabase-js');

// Initialize Supabase
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY; // Use service role key for admin operations
const supabase = createClient(supabaseUrl, supabaseServiceKey);

exports.handler = async (event, context) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, stripe-signature',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  // Handle preflight
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  const sig = event.headers['stripe-signature'];
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event;

  // Verify webhook signature
  try {
    event = stripe.webhooks.constructEvent(event.body, sig, webhookSecret);
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ error: `Webhook Error: ${err.message}` }),
    };
  }

  console.log('Processing webhook event:', event.type);

  // Handle checkout.session.completed
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    console.log('Checkout completed:', session.id);
    
    try {
      const customerEmail = session.customer_email || session.customer_details?.email;
      
      if (!customerEmail) {
        console.error('No customer email found in session');
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({ error: 'No customer email found' }),
        };
      }

      // Check if user already exists
      const { data: existingUser, error: findError } = await supabase
        .from('profiles')
        .select('*')
        .eq('email', customerEmail)
        .single();

      if (findError && findError.code !== 'PGRST116') {
        console.error('Error finding user:', findError);
      }

      if (!existingUser) {
        // Create user in auth.users via admin API
        // Note: This requires Supabase service role key with admin permissions
        
        // Alternative: Store the purchase in a separate table and let the user 
        // sign in with magic link on first access
        
        // Store purchase record
        const { error: purchaseError } = await supabase
          .from('purchases')
          .insert({
            email: customerEmail,
            stripe_session_id: session.id,
            stripe_payment_intent: session.payment_intent,
            amount_paid: session.amount_total,
            currency: session.currency,
            product: 'adi-blueprint',
            purchased_at: new Date().toISOString(),
            access_granted: true
          });

        if (purchaseError) {
          console.error('Error storing purchase:', purchaseError);
          // Still return success - purchase was made
        }

        console.log('Purchase recorded for:', customerEmail);
      } else {
        // Update existing user's access
        const { error: updateError } = await supabase
          .from('profiles')
          .update({
            has_blueprint_access: true,
            blueprint_purchased_at: new Date().toISOString()
          })
          .eq('id', existingUser.id);

        if (updateError) {
          console.error('Error updating user access:', updateError);
        }

        // Also store purchase record
        await supabase
          .from('purchases')
          .insert({
            user_id: existingUser.id,
            email: customerEmail,
            stripe_session_id: session.id,
            stripe_payment_intent: session.payment_intent,
            amount_paid: session.amount_total,
            currency: session.currency,
            product: 'adi-blueprint',
            purchased_at: new Date().toISOString(),
            access_granted: true
          });
      }

      console.log('Successfully processed purchase for:', customerEmail);
      
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ received: true }),
      };

    } catch (error) {
      console.error('Error processing checkout:', error);
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: 'Internal server error' }),
      };
    }
  }

  // Return success for unhandled events
  return {
    statusCode: 200,
    headers,
    body: JSON.stringify({ received: true }),
  };
};
