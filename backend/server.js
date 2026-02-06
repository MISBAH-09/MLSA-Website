const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// 1. Gmail Transporter Configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, 
  },
});

app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
<<<<<<< HEAD
    
    from: `"${name} (MLSA Web)" <${process.env.EMAIL_USER}>`, 
    
  
=======
    from: `"${name} (MLSA Web)" <${process.env.EMAIL_USER}>`, 
    
>>>>>>> fa6a99bdd872ac088fd3b1955d45aa373a360e06
    to: 'mlsa.cui.lhr@gmail.com',
    
    replyTo: `${name} <${email}>`, 
    
    subject: `[MLSA Inquiry] From: ${name}`,
    
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #0078d4; border-radius: 10px;">
        <h2 style="color: #0078d4;">New Website Inquiry</h2>
        <p><strong>Student Name:</strong> ${name}</p>
        <p><strong>Student Email:</strong> ${email}</p>
        <hr style="border: 0; border-top: 1px solid #eee;" />
        <p><strong>Message:</strong></p>
        <p style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${message}</p>
        <br />
        <p style="font-size: 12px; color: #777;">Tip: Simply hit "Reply" in Gmail to respond to this student.</p>
      </div>
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
<<<<<<< HEAD
=======

>>>>>>> fa6a99bdd872ac088fd3b1955d45aa373a360e06
      console.error("Mail Error:", error);
      return res.status(500).send(error.toString());
    }
    console.log('Email sent: ' + info.response);
    res.status(200).json({ success: true, message: 'Email Sent!' });
  });
});

const PORT = process.env.PORT || 5000;
<<<<<<< HEAD
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
=======
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
>>>>>>> fa6a99bdd872ac088fd3b1955d45aa373a360e06
