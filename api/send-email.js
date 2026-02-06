import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name} Inquiry from Website " <${process.env.EMAIL_USER}>`,
      to: `${process.env.EMAIL_USER}`,
      replyTo: email,
      subject: `[MLSA Website Inquiry ] From: ${name}`,
      html: `
        <div style="font-family: Arial; padding: 20px">
          <h2>New Website Inquiry</h2>
          <p><b>Message:</b></p>
          <p>${message}</p>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Mail error:', error);
    return res.status(500).json({ success: false });
  }
}
