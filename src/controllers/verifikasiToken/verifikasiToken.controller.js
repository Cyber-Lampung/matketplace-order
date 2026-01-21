import verifTokenService from "../../services/verif_token.service/verifToken.service.js";

const verifikasiTokenController = async (req, res, next) => {
  try {
    const { verifikasiToken } = req.body;
    const user_id = req.user_id;

    // check response dari service
    const { statusCode, status, message } = await verifTokenService(
      user_id,
      verifikasiToken,
    );

    return res.status(statusCode).json({ status: status, message: message });
  } catch {
    return res.status(400).json({ status: 400, message: "bad connection" });
  }
};

export default verifikasiTokenController;
