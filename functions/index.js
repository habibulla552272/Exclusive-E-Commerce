const functions = require("firebase-functions");
const nodemailer = require("nodemailer");

// Configure the transporter (use environment variables for security)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "mdhabibulla552272@gmail.com", // Your Gmail address
    pass: "password", // App password (if 2FA enabled)
  },
});

// Cloud function to send an email
exports.sendEmail = functions.https.onRequest((req, res) => {
  const { to, subject, text } = req.body;

  const mailOptions = {
    from: process.env.EMAIL,
    to: to,
    subject: subject,
    text: text,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    return res.status(200).send("Email sent: " + info.response);
  });
});
