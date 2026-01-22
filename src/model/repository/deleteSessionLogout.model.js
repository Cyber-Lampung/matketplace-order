import db from "../database/db.js";

const deleteSessionLogoutModel = async (user_id) => {
  const [queryResult] = await db.query(
    "delete from sessions where user_id = ? ",
    [user_id],
  );

  if (queryResult.affectedRows > 0) {
    return true;
  } else {
    return false;
  }
};

export default deleteSessionLogoutModel;
