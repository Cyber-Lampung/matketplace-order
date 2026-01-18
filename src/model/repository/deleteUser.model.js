import db from "../database/db.js";

const DeleteUserModel = async (user_id) => {
  // searching user in db

  const [searchUser] = await db.query("delete from users where user_id = ?", [
    user_id,
  ]);

  const [deleteSession] = await db.query(
    "delete from sessions where user_id = ?",
    [user_id],
  );

  if (searchUser.affectedRows > 0 && deleteSession.affectedRows > 0) {
    return true;
  } else {
    return false;
  }
};

export default DeleteUserModel;
