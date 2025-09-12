const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event, context) => {
  try {
    const { priceId, packageName, customerEmail, promoCode, customerDetails } = JSON.parse(event.body);

    if (!priceId) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Price ID is required' }),
      };
    }

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
        packageName: packageName,
        // Include customer details in metadata for later use
        customerDetails: customerDetails ? JSON.stringify(customerDetails) : null,
      },
    };

    // Add promo code if provided
    if (promoCode) {
      // Add the promo code as a discount
      sessionConfig.discounts = [{
        coupon: promoCode,
      }];
      // Also add promo code to metadata for tracking
      sessionConfig.metadata.promoCode = promoCode;
    }

    const session = await stripe.checkout.sessions.create(sessionConfig);

    return {
      statusCode: 200,
      body: JSON.stringify({ id: session.id }),
    };
  } catch (error) {
    console.error('Error creating checkout session:', error);
    console.error('Error details:', JSON.stringify(error, null, 2));
    
    // Check if the error is related to an invalid coupon
    if (error.type === 'StripeInvalidRequestError' && error.message.includes('coupon')) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: 'Invalid promo code',
          message: 'The promo code you entered is not valid. Please check and try again.',
          type: error.type
        }),
      };
    }
    
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Internal server error',
        message: error.message,
        type: error.type
      }),
    };
  }
};