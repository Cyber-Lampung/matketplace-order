import nodemailer from "nodemailer";

// configurasi untuk host port dll

const sendTokenMail = (to) => {
  const layerTransport = nodemailer.createTransport({
    host: process.env.hostSMTP,
    port: process.env.portSMTP,
    auth: {
      user: process.env.usernameSMTP,
      pass: process.env.passwordSMTP,
    },
    tls: {
      rejectUnauthorized: true,
      minVersion: "TLSv1.2",
    },
  });

  // send token to email using async await

  async () => {
    const infoSend = await layerTransport.sendMail({
      from: process.env.usernameSMTP,
      to: to,
      subject: "kirim token user verifikasi",
      text: "ini adalah tokennya 321223",
      //  html: "" => jika ada link yang akan dikirim ke mail
    });

    return infoSend.messageId;
  };
};

export default sendTokenMail;
