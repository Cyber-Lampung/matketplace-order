import loginService from "../services/login.service.js";

const loginController = async (req, res, next) => {
  try {
    // ambil inputan user dari req.body
    const { email, password } = req.body;

    // kirim semua ke service dan balikan kembali ke controller dalam bentuk response
    const validasi = await loginService({ email, password });

    // console.log(validasi.session); // => testing

    if (validasi.status) {
      res.cookie("session", validasi.session, {
        httpOnly: true,
        // secure: process.env.NODE_ENV === "production", => ngambil dari env
        secure: true,
        maxAge: process.env.SESSION_MAX_AGE,
        sameSite: "strict",
      });

      return res.status(200).json({
        status: 200,
        message: "succes login",
        // session: validasi.session,
      });
    } else {
      return res.status(401).json({ status: 404, message: validasi.message });
    }
  } catch {
    return res
      .status(400)
      .json({ statusCode: 400, status: false, message: "bad request" });
  }
};

export default loginController;
