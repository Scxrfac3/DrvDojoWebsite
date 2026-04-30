const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event, context) => {
  // Enable CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  // Handle preflight OPTIONS request
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  try {
    console.log('Starting checkout session creation...');
    console.log('Stripe key available:', !!process.env.STRIPE_SECRET_KEY);
    
    // Parse the request body
    let requestBody;
    try {
      requestBody = JSON.parse(event.body);
      console.log('Request body:', requestBody);
    } catch (parseError) {
      console.error('Error parsing request body:', parseError);
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Invalid request body' }),
      };
    }

    const { priceId, productType, planType, email, trialDays } = requestBody;

    // Handle subscription checkout
    if (productType === 'subscription') {
      if (!priceId) {
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({ error: 'Price ID is required for subscription' }),
        };
      }

      // Create subscription checkout session with trial
      const sessionConfig = {
        payment_method_types: ['card'],
        line_items: [
          {
            price: priceId,
            quantity: 1,
          },
        ],
        mode: 'subscription',
        subscription_data: {
          trial_period_days: trialDays || 7,
        },
        success_url: `${event.headers.origin || 'https://drivedojodrivingschool.com'}/dashboard?trial=started`,
        cancel_url: `${event.headers.origin || 'https://drivedojodrivingschool.com'}/subscribe?canceled=true`,
        customer_email: email || undefined,
        metadata: {
          productType: 'subscription',
          planType: planType || 'monthly',
        },
      };

      console.log('Creating subscription session with config:', JSON.stringify(sessionConfig, null, 2));
      
      const session = await stripe.checkout.sessions.create(sessionConfig);
      console.log('Subscription session created:', session.id);

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ url: session.url, sessionId: session.id }),
      };
    }

    // Handle one-time payment (existing ADI Blueprint flow)
    if (!priceId) {
      console.error('Price ID is missing');
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Price ID is required' }),
      };
    }

    // Validate the priceId format (Stripe price IDs start with 'price_')
    if (!priceId.startsWith('price_')) {
      console.error('Invalid Price ID format:', priceId);
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Invalid Price ID format' }),
      };
    }

    console.log('Validating Price ID:', priceId);

    // Create the session configuration for one-time payment
    const sessionConfig = {
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${event.headers.origin || 'https://drivedojodrivingschool.com'}/login?Purchased=ADI+Blueprint`,
      cancel_url: `${event.headers.origin || 'https://drivedojodrivingschool.com'}/adi-blueprint?canceled=true`,
      metadata: {
        packageName: 'ADI Blueprint',
      },
    };

    console.log('Creating Stripe session with config:', JSON.stringify(sessionConfig, null, 2));
    
    // First, verify the price exists in Stripe
    try {
      const price = await stripe.prices.retrieve(priceId);
      console.log('Price verified:', price.id, price.unit_amount, price.currency);
      
      if (!price.active) {
        console.error('Price is not active:', priceId);
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({ error: 'Selected package is not available' }),
        };
      }
    } catch (priceError) {
      console.error('Error verifying price:', priceError);
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          error: 'Invalid package selected',
          message: 'The selected package is not valid. Please select a different package.',
        }),
      };
    }
    
    const session = await stripe.checkout.sessions.create(sessionConfig);
    console.log('Stripe session created successfully:', session.id);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ url: session.url, id: session.id }),
    };
  } catch (error) {
    console.error('Error creating checkout session:', error);
    console.error('Error type:', error.type);
    console.error('Error message:', error.message);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: 'Failed to create checkout session',
        message: error.message,
      }),
    };
  }
};
