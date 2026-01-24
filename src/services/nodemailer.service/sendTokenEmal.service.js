import layerTransport from "../../config/mailer.config.js";

const sendTokenEmail = async (email, token) => {
  const mailOptions = {
    from: process.env.USERNAME_SMTP,
    to: email,
    subject: "verfikasi email",
    text: `token verification anda adalah ${token} silahkan gunakan sebelum 10 menit`,
  };

  try {
    return await layerTransport.sendMail(mailOptions);
  } catch (error) {
    console.log(error);
    throw new Error("invalid send message by Email");
  }
};

export default sendTokenEmail;
