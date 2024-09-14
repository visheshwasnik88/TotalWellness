import nodeMailer from "nodemailer";

export const sendEmail = async (options) => {
  console.log(
    process.env.SMTP_MAIL,
    process.env.SMTP_PASSWORD,
    process.env.SMTP_PORT
  );
  const transporter = nodeMailer.createTransport({
    // host: process.env.SMTP_HOST,
    // port: process.env.SMTP_PORT ,
    // secure: false,
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.SMTP_MAIL,
    to: options.email,
    subject: options.subject,
    text: `${options.message} \n\nEmail of user who sent the message:${options.userEmail}`,
  };
  await transporter.sendMail(mailOptions);
};
