// netlify/functions/contact.js

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method not allowed' }),
    };
  }

  const { firstName, email, type, comment } = JSON.parse(event.body);

  const msg = {
    to: 'claudio.leite@hotmail.com', // Your email address
    from: 'claudio.leite@hotmail.com', // Verified sender
    subject: `New Contact Form Submission - ${type}`,
    text: `Name: ${firstName}\nEmail: ${email}\nMessage: ${comment}`,
    html: `<p>Name: ${firstName}</p><p>Email: ${email}</p><p>Message: ${comment}</p>`,
  };

  try {
    await sgMail.send(msg);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error sending email' }),
    };
  }
};
