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
      console.log('Request body parsed successfully:', { priceId: requestBody.priceId, packageName: requestBody.packageName });
    } catch (parseError) {
      console.error('Error parsing request body:', parseError);
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Invalid request body' }),
      };
    }

    const { priceId, packageName, customerEmail, promoCode, customerDetails } = requestBody;

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

    // Create the session configuration
    const sessionConfig = {
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${event.headers.origin || 'https://drivedojodrivingschool.com'}/booking/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${event.headers.origin || 'https://drivedojodrivingschool.com'}/booking/cancel`,
      customer_email: customerEmail || undefined,
      metadata: {
        packageName: packageName || 'Driving Lesson',
        // Include customer details in metadata for later use
        customerDetails: customerDetails ? JSON.stringify(customerDetails) : null,
      },
    };

    // Add promo code if provided
    if (promoCode) {
      console.log('Adding promo code:', promoCode);
      // Add the promo code as a discount
      sessionConfig.discounts = [{
        coupon: promoCode,
      }];
      // Also add promo code to metadata for tracking
      sessionConfig.metadata.promoCode = promoCode;
    }

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
          type: priceError.type
        }),
      };
    }
    
    const session = await stripe.checkout.sessions.create(sessionConfig);
    console.log('Stripe session created successfully:', session.id);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ id: session.id }),
    };
  } catch (error) {
    console.error('Error creating checkout session:', error);
    console.error('Error type:', error.type);
    console.error('Error message:', error.message);
    console.error('Error stack:', error.stack);
    
    // Check if the error is related to an invalid coupon
    if (error.type === 'StripeInvalidRequestError' && error.message.includes('coupon')) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          error: 'Invalid promo code',
          message: 'The promo code you entered is not valid. Please check and try again.',
          type: error.type
        }),
      };
    }
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: 'Internal server error',
        message: error.message,
        type: error.type,
        stack: error.stack
      }),
    };
  }
};