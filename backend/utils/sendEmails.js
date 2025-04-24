import nodemailer from "nodemailer";

export const sendEmail = async (from, subject, text) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.NACOSS_UNILORIN_EMAIL,
      pass: process.env.NACOSS_UNILORIN_EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from,
    to: process.env.NACOSS_UNILORIN_EMAIL,
    subject,
    text,
  };

  return transporter.sendMail(mailOptions);
};
