import db from "../database/db.js";

const checkEmailUsedInDb = async (email) => {
  // validasi apakah email sudah ada atau belum

  const [checkEmailUsed] = await db.query(
    "select * from users where email = ?",
    [email]
  );

  // console.log(checkEmailUsed.length);

  if (checkEmailUsed.length == 1) {
    return true;
  } else {
    return false;
  }
};

export default checkEmailUsedInDb;
