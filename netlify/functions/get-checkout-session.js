const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event, context) => {
  // Enable CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, OPTIONS'
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
    console.log('Retrieving checkout session...');
    console.log('Stripe key available:', !!process.env.STRIPE_SECRET_KEY);
    
    const sessionId = event.queryStringParameters.session_id;

    if (!sessionId) {
      console.error('Session ID is missing');
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Session ID is required' }),
      };
    }

    console.log('Retrieving session with ID:', sessionId);
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ['line_items', 'customer_details'],
    });

    console.log('Session retrieved successfully');
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(session),
    };
  } catch (error) {
    console.error('Error retrieving checkout session:', error);
    console.error('Error type:', error.type);
    console.error('Error message:', error.message);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: 'Internal server error',
        message: error.message,
        type: error.type
      }),
    };
  }
};