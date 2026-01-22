import jwt from "jsonwebtoken";
import DeleteUserModel from "../model/repository/deleteUser.model.js";

const DeleteAccountService = async (token) => {
  // console.log(token); => testing

  const secretPublicKey = process.env.JWT_SECRET;
  const verifToken = await jwt.verify(token, secretPublicKey);

  console.log(verifToken.userId);

  //   kirim userId ke model untuk di check
  const serchUser = await DeleteUserModel(verifToken.userId);

  if (serchUser) {
    return { status: "succes", message: "succes delete users" };
  } else {
    return {
      status: "invalid",
      message: "invalid delete user, user not found",
    };
  }
};

export default DeleteAccountService;
