import updateUserModel from "../model/repository/updateUser.model.js";
import bcryptPassword from "../utils/hashPassword.js";

const updateUserService = async (email, username, password, user_id) => {
  // ambil function untuk check user dan update user dari model
  const { validasiUserUpdate, updateUser } = await updateUserModel();
  const { hashPassword } = await bcryptPassword();
  //   check user in DB
  const isValidasiUser = await validasiUserUpdate(user_id);

  // validasi apakah user ada atau tidak
  if (isValidasiUser.user.length === 0) {
    return false;
  }

  const userIdentityForUpdate = isValidasiUser.user[0];

  // hash password

  const passwordHash = await hashPassword(password);

  // console.log(passwordHash); => testing

  // save user Cridential

  const fields = [];
  const values = [];

  // update email
  if (!email) {
    fields.push("email = ?");
    values.push(userIdentityForUpdate.email);
  } else {
    fields.push("email = ?");
    values.push(email);
  }

  if (!username) {
    fields.push("username = ?");
    values.push(userIdentityForUpdate.username);
  } else {
    fields.push("username = ?");
    values.push(username);
  }

  if (!password) {
    fields.push("password = ?");
    values.push(userIdentityForUpdate.password);
  } else {
    fields.push("password = ?");
    values.push(passwordHash);
  }

  const joinFields = fields.join(", ");

  const isUpdateUser = await updateUser(joinFields, values, user_id);

  if (isUpdateUser) {
    return true;
  } else {
    return false;
  }
};

export default updateUserService;
