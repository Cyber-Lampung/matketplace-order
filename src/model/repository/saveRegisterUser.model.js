import db from "../database/db.js";

const saveRegisterUer = async (
  userId,
  email,
  username,
  password,
  sessionId,
  create_at,
  expires_at,
  isVerif,
  role,
  role_id,
) => {
  // save user dalama database

  const [saveUser] = await db.query(
    "insert into users (user_id, email, username, password, created_at, isVerif) values (?, ?, ?, ?, ?, ?)",
    [userId, email, username, password, create_at, isVerif],
  );

  const [saveSession] = await db.query(
    "insert into sessions (session_id, user_id, created_at, expires_at) values (?, ?, ?, ?)",
    [sessionId, userId, create_at, expires_at],
  );

  const [setRole] = await db.query(
    "insert into role_user (role_id, user_id, role) values (?, ?, ?)"[
      (role_id, userId, role)
    ],
  );

  // console.table(saveSession[0]);

  const isValidNextSaveUser =
    saveUser.affectedRows > 0 &&
    saveSession.affectedRows > 0 &&
    setRole.affectedRows > 0;

  // console.log(await saveSession[0]); // => testing

  if (isValidNextSaveUser) {
    return { status: true, session: sessionId };
  } else {
    return { status: false };
  }
};

export default saveRegisterUer;
