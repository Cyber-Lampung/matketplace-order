import layerTransport from "../../config/mailer.config.js";

const sendTokenEmail = async (email) => {
  const mailOptions = {
    from: process.env.USERNAME_SMTP,
    to: email,
    subject: "verfikasi email",
    text: "verifikasi token test",
  };

  try {
    return await layerTransport.sendMail(mailOptions);
  } catch (error) {
    console.log(error);
    throw new Error("invalid send message by Email");
  }
};

export default sendTokenEmail;
