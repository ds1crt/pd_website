const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const nodemailer = require('nodemailer');

// 1. Import and configure the cors middleware
const cors = require('cors')({origin: true});

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// 2. Remove {cors: true} and wrap the function logic with the cors middleware
exports.sendContactEmail = onRequest({region: 'europe-west2'}, (request, response) => {
  
  // 3. This tells cors to handle the request and response
  cors(request, response, () => {
    
    // Your original function logic goes inside here
    if (request.method !== 'POST') {
        return response.status(405).send('Method Not Allowed');
    }

    const { name, email, message } = request.body;

    if (!name || !email || !message) {
        return response.status(400).send('Missing fields: name, email, or message.');
    }

    const mailOptions = {
        from: `"${name}" <${email}>`,
        to: process.env.EMAIL_USER,
        subject: `New Contact Form Message from ${name}`,
        text: `You have received a new message from your website contact form.\n\n` +
              `Name: ${name}\n` +
              `Email: ${email}\n` +
              `Message: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            logger.error("Error sending email:", error);
            return response.status(500).send('Error sending email.');
        }
        logger.info("Email sent successfully!");
        return response.status(200).send('Email sent successfully!');
    });
  });
});