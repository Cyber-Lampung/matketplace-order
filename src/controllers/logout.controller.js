import jwt from "jsonwebtoken";
import logoutService from "../services/logout.service.js";

const logoutController = async (req, res, next) => {
  try {
    const sessionUser = req.cookies.session;
    const sessionHeader = req.headers.authorization; // testing

    // alternative token check
    const splitSessionHeader = sessionHeader.split(" ")[1];

    // secret verifikasi

    const secretKeyVerifToken = process.env.JWT_SECRET;

    // verfikasi token header
    const verifikaasiToken = await jwt.verify(
      splitSessionHeader,
      secretKeyVerifToken,
    );

    const user_id = verifikaasiToken.userId;

    const { statusCode, status, message } = await logoutService(user_id);

    if (status) {
      return res
        .status(statusCode)
        .json({ statusCode: statusCode, status: status, message: message });
    } else {
      return res
        .status(statusCode)
        .json({ statusCode: statusCode, status: status, message: message });
    }
  } catch {
    return res.status(400).json({
      statusCode: 400,
      status: false,
      message: "bad request",
    });
  }
};

export default logoutController;
