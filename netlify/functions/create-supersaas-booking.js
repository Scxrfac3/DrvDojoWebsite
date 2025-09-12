const axios = require('axios');

exports.handler = async (event, context) => {
  console.log('Starting SuperSaaS booking creation...');
  
  try {
    const {
      customerName,
      customerEmail,
      customerPhone,
      selectedDate,
      selectedTime,
      packageType,
      address
    } = JSON.parse(event.body);

    console.log('Received booking request:', { customerName, customerEmail, selectedDate, selectedTime });

    if (!customerName || !customerEmail || !selectedDate || !selectedTime) {
      console.error('Missing required fields');
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' }),
      };
    }

    // SuperSaaS API configuration
    const apiKey = process.env.SUPERSAAS_API_KEY;
    console.log('API Key available:', !!apiKey);
    
    const accountId = 'drivedojodrivingschool'; // Your SuperSaaS account name
    const scheduleId = '1'; // This should be your schedule ID for driving lessons
    
    // Format the date and time for SuperSaaS
    const formattedDate = new Date(selectedDate).toISOString().split('T')[0];
    console.log('Formatted date:', formattedDate);
    
    // Create the booking data
    const bookingData = {
      name: customerName,
      email: customerEmail,
      phone: customerPhone,
      start: formattedDate,
      slot: selectedTime,
      resource: '1', // This might need to be adjusted based on your setup
      full_name: customerName,
      fields: {
        package_type: packageType || 'Standard Lesson',
        address: address || '',
        notes: '2-hour driving lesson booking'
      }
    };

    console.log('Booking data:', JSON.stringify(bookingData, null, 2));

    // Make the API call to SuperSaaS
    const apiUrl = `https://www.supersaas.com/api/${accountId}/schedules/${scheduleId}/bookings.json`;
    console.log('Making API call to:', apiUrl);
    
    const response = await axios.post(
      apiUrl,
      bookingData,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        }
      }
    );

    console.log('API response:', response.data);

    // Return success response
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        bookingId: response.data.id,
        message: 'Booking created successfully'
      }),
    };
  } catch (error) {
    console.error('Error creating SuperSaaS booking:', error);
    
    // Handle specific error cases
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error('Error response data:', error.response.data);
      console.error('Error response status:', error.response.status);
      
      return {
        statusCode: error.response.status,
        body: JSON.stringify({
          error: 'Booking failed',
          message: error.response.data.message || 'Failed to create booking',
          details: error.response.data
        }),
      };
    } else if (error.request) {
      // The request was made but no response was received
      console.error('No response received:', error.request);
      return {
        statusCode: 500,
        body: JSON.stringify({
          error: 'No response from SuperSaaS',
          message: 'Unable to connect to the booking service. Please try again later.'
        }),
      };
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Request setup error:', error.message);
      return {
        statusCode: 500,
        body: JSON.stringify({
          error: 'Internal server error',
          message: error.message
        }),
      };
    }
  }
};