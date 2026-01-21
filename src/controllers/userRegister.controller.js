import UserRegister from "../services/userRegister.service.js";

const registerController = async (req, res, next) => {
  // ambil data user body
  const { email, username, password, role } = req.body;

  // kirim data user kesini
  const result = await UserRegister(email, username, password, role);

  // console.log(result.status);

  if (result.status) {
    // kirim ke FE lewat cookie
    res.cookie("session", result.session, {
      httpOnly: true,
      secure: true,
      maxAge: process.env.SESSION_MAX_AGE,
      sameSite: "strict",
    });

    return res.status(201).json({
      status: 201,
      message: "succes created Account",
      isVerif: false,
    });
  } else {
    return res
      .status(409)
      .json({ status: 409, message: "invalid created user" });
  }
};

export default registerController;
