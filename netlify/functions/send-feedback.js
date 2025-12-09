// netlify/send-feedback.js

const nodemailer = require('nodemailer');

// --- 1. GET CREDENTIALS SECURELY ---
// IMPORTANT: Credentials MUST be set as Environment Variables in Netlify's UI!
const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;

// --- 2. EMAIL TRANSPORT SETUP ---
const transporter = nodemailer.createTransport({
    service: 'gmail', // Change this if you are using a different service
    auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
    },
});

// --- 3. MAIN SERVERLESS HANDLER ---
// Netlify provides the event object with request body and method
exports.handler = async (event, context) => {
    // Only allow POST requests
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        // Parse the JSON data sent from the Angular app
        const data = JSON.parse(event.body);
        const { name, email, message } = data;

        if (!name || !email || !message) {
            return { statusCode: 400, body: 'Missing required fields.' };
        }

        const mailOptions = {
            from: EMAIL_USER,
            to: EMAIL_USER, // Sends the email to yourself
            subject: `New Feedback from ${name} (${email})`,
            text: `Sender Name: ${name}\nSender Email: ${email}\n\nMessage:\n${message}`,
        };

        await transporter.sendMail(mailOptions);

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Feedback received and email sent successfully!' }),
        };
    } catch (error) {
        console.error('Error sending email:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to send feedback.' }),
        };
    }
};