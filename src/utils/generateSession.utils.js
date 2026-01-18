import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
dotenv.config();

const createSessionId = (userId, time) => {
  // created payload
  const payload = { userId: userId };

  // ambil secret key dari dotenv
  const secretKey = process.env.JWT_SECRET || "your-default-secret-key";

  return jwt.sign(payload, secretKey, { algorithm: "HS256", expiresIn: time });
};

export default createSessionId;
