import db from "../database/db.js";

const checkUserInDb = async (email) => {
  // check user dalam database

  const [isUser] = await db.query("select * from users where email = ?", [
    email,
  ]);

  if (!isUser[0]) {
    return false;
  }

  const [findSessionId] = await db.query(
    "select * from sessions where user_id = ?",
    [isUser[0].user_id],
  );

  if (isUser[0] && findSessionId) {
    return {
      status: true,
      data: isUser[0],
      session: findSessionId[0].session_id,
    };
  } else {
    return false;
  }
};

export default checkUserInDb;
