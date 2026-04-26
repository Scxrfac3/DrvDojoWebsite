const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const { createClient } = require('@supabase/supabase-js');

// Initialize Supabase with Service Role Key for admin operations
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY;
const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

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

  let eventData;

  // Verify webhook signature
  try {
    eventData = stripe.webhooks.constructEvent(event.body, sig, webhookSecret);
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ error: `Webhook Error: ${err.message}` }),
    };
  }

  console.log('Processing webhook event:', eventData.type);

  // Handle checkout.session.completed
  if (eventData.type === 'checkout.session.completed') {
    const session = eventData.data.object;
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

      console.log('Processing purchase for:', customerEmail);

      // Check if user already exists in auth.users
      const { data: existingUsers, error: listError } = await supabase.auth.admin.listUsers();

      if (listError) {
        console.error('Error listing users:', listError);
      }

      const existingUser = existingUsers?.users.find(u => u.email === customerEmail);

      if (!existingUser) {
        // Create new user in auth.users with magic link
        // This automatically sends a welcome email with the magic link
        console.log('Creating new user account for:', customerEmail);
        
        const { data: newUser, error: createError } = await supabase.auth.admin.createUser({
          email: customerEmail,
          email_confirm: true,
          user_metadata: {
            source: 'adi-blueprint-purchase',
            purchased_at: new Date().toISOString(),
            stripe_session_id: session.id
          }
        });

        if (createError) {
          console.error('Error creating user:', createError);
          // Don't fail the webhook - the purchase was still successful
          // User can request a magic link manually if needed
        } else {
          console.log('User created successfully:', newUser.id);
          
          // Store purchase record with user_id
          const { error: purchaseError } = await supabase
            .from('purchases')
            .insert({
              user_id: newUser.id,
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
            console.error('Error storing purchase record:', purchaseError);
          } else {
            console.log('Purchase record stored for:', customerEmail);
          }

          // Update or create profile with blueprint access
          const { error: profileError } = await supabase
            .from('profiles')
            .upsert({
              id: newUser.id,
              email: customerEmail,
              has_blueprint_access: true,
              blueprint_purchased_at: new Date().toISOString()
            }, {
              onConflict: 'id'
            });

          if (profileError) {
            console.error('Error updating profile:', profileError);
          } else {
            console.log('Profile updated with blueprint access for:', customerEmail);
          }
        }
      } else {
        // Existing user - update their access
        console.log('Updating existing user access for:', customerEmail);
        
        // Update or create profile with blueprint access
        const { error: profileError } = await supabase
          .from('profiles')
          .upsert({
            id: existingUser.id,
            email: customerEmail,
            has_blueprint_access: true,
            blueprint_purchased_at: new Date().toISOString()
          }, {
            onConflict: 'id'
          });

        if (profileError) {
          console.error('Error updating profile:', profileError);
        }

        // Store purchase record
        const { error: purchaseError } = await supabase
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

        if (purchaseError) {
          console.error('Error storing purchase record:', purchaseError);
        }

        console.log('Existing user access updated for:', customerEmail);
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
