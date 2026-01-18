import DeleteAccountService from "../services/userDelete.service.js";

const DeleteAccount = async (req, res, next) => {
  const bearerToken = req.headers.authorization;
  const splitBearerJWT = bearerToken.split(" ")[1];

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
};

export default DeleteAccount;
