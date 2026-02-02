const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post('/send-email', (req, res) => {
  const { name, email, university, message } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'mlsa.cui.lahore@gmail.com', // The official MLSA email
    subject: `New MLSA Inquiry from ${name}`,
    html: `<h1>New Message</h1><p><strong>Name:</strong> ${name}</p><p><strong>Message:</strong> ${message}</p>` // Your HTML Template goes here
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) return res.status(500).send(error.toString());
    res.status(200).json({ success: true, message: 'Email Sent!' });
  });
});

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));