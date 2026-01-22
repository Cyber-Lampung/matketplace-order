import nodemailer from "nodemailer";
import dns from "node:dns";
dns.setDefaultResultOrder("ipv4first");

const layerTransport = nodemailer.createTransport({
  host: process.env.HOST_SMTP,
  port: process.env.PORT_SMTP,
  secure: false,
  auth: {
    user: process.env.USERNAME_SMTP,
    pass: process.env.PASSWORD_SMTP,
  },
  tls: {
    rejectUnauthorized: false,
    minVersion: "TLSv1.2",
  },
});

export default layerTransport;
