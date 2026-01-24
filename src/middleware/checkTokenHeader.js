import checkTokenHeaderService from "../services/checkToken.service.js";

const checkTokenHeader = (req, res, next) => {
  try {
    // check token

    const tokenHeader = req.headers.authorization;

    if (!tokenHeader) {
      return res
        .status(401)
        .json({ status: 401, message: "invalid token, token empety" });
    }

    const tokenBearer = tokenHeader.split(" ")[1];

    const checkValidasiTokenService = checkTokenHeaderService(tokenBearer);
    const user_id = checkValidasiTokenService.user_id;

    if (!checkValidasiTokenService.status) {
      return res.status(403).json({
        status: 403,
        message: "token tidak valid anda dilarang masuk",
      });
    } else {
      req.user_id = user_id;
      next();
    }
  } catch {
    return res.status(401).json({
      statusCode: 401,
      status: 401,
      message: "invalid token, token not modified",
    });
  }
};

export default checkTokenHeader;
