import updateUserService from "../services/updateUser.service.js";

const updateUserController = async (req, res, next) => {
  // service update user

  // ambil user berdasarkan user_id
  const user_id = req.user_id;

  // ambil data body json
  const { email, username, password } = req.body;

  const status = await updateUserService(email, username, password, user_id);

  if (status === false) {
    return res.status(409).json({ status: 409, message: "gagal update user" });
  }

  return res.status(200).json({ status: 200, message: "berhasil update user" });
};

export default updateUserController;
