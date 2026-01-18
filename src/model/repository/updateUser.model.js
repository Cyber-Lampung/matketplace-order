import db from "../database/db.js";

const updateUserModel = () => {
  // check user terlebih dahulu
  async function validasiUserUpdate(userId) {
    const [users] = await db.query("select * from users where user_id = ?", [
      userId,
    ]);

    if (users) {
      return { status: "valid", user: users };
    } else {
      return false;
    }
  }

  async function updateUser(joinFields, values, userId) {
    // update data dalam database

    const [email, username, password] = values;

    const sqlUpdateUser = `update users set ${joinFields} where user_id = ? `;

    const [updateStatus] = await db.query(sqlUpdateUser, [
      email,
      username,
      password,
      userId,
    ]);

    if (updateStatus.affectedRows > 0) {
      return true;
    } else {
      return false;
    }
  }

  return { validasiUserUpdate, updateUser };
};

export default updateUserModel;
