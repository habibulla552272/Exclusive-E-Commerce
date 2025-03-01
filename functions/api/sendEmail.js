import nodemailer from 'nodemailer';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { to, subject, text } = req.body;

    // Create a transporter using your email service credentials
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: "mdhabibulla552272@gmail.com",       // Your Gmail address
        pass: 'password',       // Your Gmail app password
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject,
      text,
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).json({ error: error.toString() });
      }
      res.status(200).json({ message: 'Email sent!', info });
    });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
