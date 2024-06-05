const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async (event, context) => {
  try {
    const data = JSON.parse(event.body);

    const msg = {
      to: 'claudio.leite@hotmail.com', // Change to your recipient
      from: 'claudio.leite@hotmail.com', // Change to your verified sender
      subject: 'New Contact Form Submission',
      text: `You have a new contact form submission from ${data.firstName} ${data.lastName} (${data.email}). Message: ${data.message}`,
      html: `<strong>You have a new contact form submission from ${data.firstName} ${data.lastName} (${data.email}).</strong><p>Message: ${data.message}</p>`,
    };

    await sgMail.send(msg);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' }),
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Failed to send email' }),
    };
  }
};
