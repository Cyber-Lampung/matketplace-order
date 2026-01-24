import DeleteAccountService from "../services/userDelete.service.js";

const deleteAccount = async (req, res, next) => {
  try {
    // token headers => best practic for mobile apps
    const bearerToken = req.headers.authorization;
    const splitBearerJWT = bearerToken.split(" ")[1];

    // cookie user => best practic for web dev

    // const cookieSession = req.cookie("session");

    if (!bearerToken) {
      return { status: false, message: "token empety" };
    }

    const deleteAccountService = await DeleteAccountService(splitBearerJWT);

    if (deleteAccountService.status === "succes") {
      return res
        .status(200)
        .json({ status: true, message: deleteAccountService.message });
    } else {
      return res
        .status(404)
        .json({ status: false, messae: deleteAccountService.message });
    }
  } catch {
    return res
      .status(400)
      .json({ statusCode: 400, status: false, messae: "bad request" });
  }
};

export default deleteAccount;
