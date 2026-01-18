import checkUserInDb from "../model/repository/checkUserLogin.js";
import bcryptPassword from "../utils/hashPassword.js";

const loginService = async ({ email, password }) => {
  const { comparePassword } = await bcryptPassword();

  // validasi jika req.body kosong
  //   if (await !req.body) {
  //     return { status: "invalid", message: "not empty all" };
  //     // return errorBody;
  //   }

  if (!email || !password) {
    return { status: false, message: "inputan not valid empety" };
  }

  // if (password.length <= 8) {
  //   return { status: false, message: "password min 8 length" };
  // }

  // memvalidasi user dalam database untuk validasi

  const userValidasi = await checkUserInDb(email);

  if (!userValidasi.status || !userValidasi.data) {
    return { status: false, message: "user not found" };
  }

  const isValidPassword = await comparePassword(
    password,
    userValidasi.data.password,
  );

  if (!isValidPassword) {
    return { status: false, message: "invalid password" };
  }

  if (userValidasi.status === true && isValidPassword) {
    return {
      status: true,
      message: "berhasil login",
      session: userValidasi.session,
    };
  } else {
    return { status: false, message: "user not found" };
  }
};

export default loginService;
