import jwt from "jsonwebtoken";

const checkTokenHeaderService = (token) => {
  // verifikasi token dan ambil user_id dari token jwt

  const secretKey = process.env.JWT_SECRET;

  const verifToken = jwt.verify(token, secretKey);

  if (verifToken) {
    return { status: true, user_id: verifToken.userId };
  } else {
    return false;
  }
};

export default checkTokenHeaderService;
