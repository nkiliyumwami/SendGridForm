// app/api/contact/route.js

import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req) {
  const { name, email, message } = await req.json();

  try {
    await sendgrid.send({
      to: 'clarisse@anchoreco.com', // Your recipient email
      from: 'clarisse@anchoreco.com', // Your verified email in SendGrid
      replyTo: email, // Sets the visitor's email as the reply-to address
      subject: `New message from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return new Response(JSON.stringify({ message: 'Message sent successfully' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Failed to send message' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}