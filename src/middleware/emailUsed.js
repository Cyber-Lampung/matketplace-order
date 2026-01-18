import checkEmailUsedService from "../services/checkEmailUsed.service.js";

const emailUsed = async (req, res, next) => {
  const { used, message } = await checkEmailUsedService(req);

  if (used === true) {
    return res.status(409).json({ status: 409, message: message });
  }

  next();
};

export default emailUsed;
