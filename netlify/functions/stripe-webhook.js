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
      const productType = session.metadata?.productType;
      
      if (!customerEmail) {
        console.error('No customer email found in session');
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({ error: 'No customer email found' }),
        };
      }

      console.log('Processing purchase for:', customerEmail, 'productType:', productType);

      // Check if user already exists in auth.users
      const { data: existingUsers, error: listError } = await supabase.auth.admin.listUsers();

      if (listError) {
        console.error('Error listing users:', listError);
      }

      const existingUser = existingUsers?.users.find(u => u.email === customerEmail);

      if (!existingUser) {
        // Create new user in auth.users with magic link
        console.log('Creating new user account for:', customerEmail);
        
        const { data: newUser, error: createError } = await supabase.auth.admin.createUser({
          email: customerEmail,
          email_confirm: true,
          user_metadata: {
            source: 'adi-finance-subscription',
            subscribed_at: new Date().toISOString(),
            stripe_session_id: session.id
          }
        });

        if (createError) {
          console.error('Error creating user:', createError);
        } else {
          console.log('User created successfully:', newUser.id);
          
          if (productType === 'subscription') {
            // Handle subscription checkout
            await handleSubscriptionCheckout(session, newUser.id, customerEmail);
          } else {
            // Handle one-time purchase (existing ADI Blueprint flow)
            await handleOneTimePurchase(session, newUser.id, customerEmail);
          }
        }
      } else {
        // Existing user - update their access
        console.log('Updating existing user access for:', customerEmail);
        
        if (productType === 'subscription') {
          // Handle subscription checkout for existing user
          await handleSubscriptionCheckout(session, existingUser.id, customerEmail);
        } else {
          // Handle one-time purchase for existing user
          await handleOneTimePurchase(session, existingUser.id, customerEmail);
        }
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

  // Handle customer.subscription.updated (trial started, renewed, etc.)
  if (eventData.type === 'customer.subscription.updated') {
    const subscription = eventData.data.object;
    console.log('Subscription updated:', subscription.id);
    
    try {
      await handleSubscriptionUpdate(subscription);
      
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ received: true }),
      };
    } catch (error) {
      console.error('Error processing subscription update:', error);
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: 'Internal server error' }),
      };
    }
  }

  // Handle customer.subscription.deleted (canceled)
  if (eventData.type === 'customer.subscription.deleted') {
    const subscription = eventData.data.object;
    console.log('Subscription deleted:', subscription.id);
    
    try {
      await handleSubscriptionDeleted(subscription);
      
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ received: true }),
      };
    } catch (error) {
      console.error('Error processing subscription deletion:', error);
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: 'Internal server error' }),
      };
    }
  }

  // Handle invoice.payment_failed (failed payment)
  if (eventData.type === 'invoice.payment_failed') {
    const invoice = eventData.data.object;
    console.log('Invoice payment failed:', invoice.id);
    
    try {
      await handleFailedPayment(invoice);
      
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ received: true }),
      };
    } catch (error) {
      console.error('Error processing failed payment:', error);
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

// Helper function to handle subscription checkouts
async function handleSubscriptionCheckout(session, userId, customerEmail) {
  const subscription = await stripe.subscriptions.retrieve(session.subscription);
  const planType = session.metadata?.planType || 'monthly';
  
  // Calculate trial end date (7 days from now)
  const trialEndsAt = new Date();
  trialEndsAt.setDate(trialEndsAt.getDate() + 7);
  
  // Update or create profile with subscription info
  const { error: profileError } = await supabase
    .from('profiles')
    .upsert({
      id: userId,
      email: customerEmail,
      stripe_customer_id: session.customer,
      subscription_status: subscription.status,
      plan_type: planType,
      trial_ends_at: trialEndsAt.toISOString(),
      subscription_id: subscription.id,
      current_period_end: new Date(subscription.current_period_end * 1000).toISOString(),
      has_finance_access: true
    }, {
      onConflict: 'id'
    });

  if (profileError) {
    console.error('Error updating profile with subscription:', profileError);
  } else {
    console.log('Profile updated with subscription for:', customerEmail);
  }
}

// Helper function to handle one-time purchases (ADI Blueprint)
async function handleOneTimePurchase(session, userId, customerEmail) {
  // Store purchase record with user_id
  const { error: purchaseError } = await supabase
    .from('purchases')
    .insert({
      user_id: userId,
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
      id: userId,
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

// Helper function to handle subscription updates
async function handleSubscriptionUpdate(subscription) {
  // Find user by stripe customer id
  const { data: profiles, error: findError } = await supabase
    .from('profiles')
    .select('id, email')
    .eq('stripe_customer_id', subscription.customer)
    .limit(1);

  if (findError) {
    console.error('Error finding profile:', findError);
    return;
  }

  if (!profiles || profiles.length === 0) {
    console.log('No profile found for customer:', subscription.customer);
    return;
  }

  const userId = profiles[0].id;
  
  // Calculate trial end date if in trial period
  let trialEndsAt = null;
  if (subscription.status === 'trialing' && subscription.trial_end) {
    trialEndsAt = new Date(subscription.trial_end * 1000).toISOString();
  }
  
  // Update profile with subscription status
  const { error: updateError } = await supabase
    .from('profiles')
    .update({
      subscription_status: subscription.status,
      trial_ends_at: trialEndsAt,
      current_period_end: new Date(subscription.current_period_end * 1000).toISOString(),
      subscription_id: subscription.id
    })
    .eq('id', userId);

  if (updateError) {
    console.error('Error updating subscription status:', updateError);
  } else {
    console.log('Subscription status updated for user:', userId, 'status:', subscription.status);
  }
}

// Helper function to handle subscription deletion/cancellation
async function handleSubscriptionDeleted(subscription) {
  // Find user by stripe customer id
  const { data: profiles, error: findError } = await supabase
    .from('profiles')
    .select('id, email')
    .eq('stripe_customer_id', subscription.customer)
    .limit(1);

  if (findError) {
    console.error('Error finding profile:', findError);
    return;
  }

  if (!profiles || profiles.length === 0) {
    console.log('No profile found for customer:', subscription.customer);
    return;
  }

  const userId = profiles[0].id;
  
  // Update profile to mark subscription as canceled
  const { error: updateError } = await supabase
    .from('profiles')
    .update({
      subscription_status: 'canceled',
      has_finance_access: false
    })
    .eq('id', userId);

  if (updateError) {
    console.error('Error canceling subscription:', updateError);
  } else {
    console.log('Subscription canceled for user:', userId);
  }
}

// Helper function to handle failed payments
async function handleFailedPayment(invoice) {
  // Find user by stripe customer id
  const { data: profiles, error: findError } = await supabase
    .from('profiles')
    .select('id, email')
    .eq('stripe_customer_id', invoice.customer)
    .limit(1);

  if (findError) {
    console.error('Error finding profile:', findError);
    return;
  }

  if (!profiles || profiles.length === 0) {
    console.log('No profile found for customer:', invoice.customer);
    return;
  }

  const userId = profiles[0].id;
  
  // Update profile to mark subscription as past_due
  const { error: updateError } = await supabase
    .from('profiles')
    .update({
      subscription_status: 'past_due'
    })
    .eq('id', userId);

  if (updateError) {
    console.error('Error updating past_due status:', updateError);
  } else {
    console.log('Subscription marked as past_due for user:', userId);
  }
}
