import saveRegisterUer from "../model/repository/saveRegisterUser.model.js";
import createdDateTime from "../utils/createdDateTime.utils.js";
import createSessionId from "../utils/generateSession.utils.js";
import generateUUID from "../utils/generateUUID.js";
import bcryptPassword from "../utils/hashPassword.js";
import sendTokenMail from "./nodemailer.service/sendTokenEmal.service.js";
import createRandomToken from "../utils/createRandomToken.utils.js";
import saveTokenService from "./verif_token.service/saveToken.service.js";

const UserRegister = async (email, username, password, role = "user") => {
  // ambil function untuk hash password
  const { hashPassword } = await bcryptPassword();
  const { dateTimeNow, expires_at } = createdDateTime();

  // validassi jika ada kosong return fale
  if (!email || !username || !password) {
    return false;
  }

  // validasi jika user input kurang dari 8 => standarisasi

  if (email.length < 8 || username.length < 8 || password.length < 8) {
    return {
      statusCode: 403,
      status: false,
      message: "fields kurang dari 8 character",
    };
  }

  // testing;

  // create user_id role_id dll
  const userId = generateUUID();
  const role_id = generateUUID();

  // hash password
  const passwordHash = await hashPassword(password);

  // sessionId
  const sessionId = await createSessionId(userId, "7d");

  // set iVerif

  const isVerif = false;

  // create dateTime dan expires_time
  const create_at = dateTimeNow();
  const expires = expires_at(92);

  // check created token verif

  const responseCreatedTokenVeif = await saveTokenService(userId);

  const check = await saveRegisterUer(
    userId,
    email,
    username,
    passwordHash,
    sessionId,
    create_at,
    expires,
    isVerif,
    role,
    role_id,
  );

  if (check.status === true && responseCreatedTokenVeif.status) {
    // kirim token disini

    const sendTokenViaEmail = await sendTokenMail(
      email,
      responseCreatedTokenVeif.token,
    );

    if (!sendTokenViaEmail.messageId) {
      console.log("invalid kirim token");
    }

    return { status: true, session: check.session };
  } else {
    return { status: false };
  }
};

export default UserRegister;
