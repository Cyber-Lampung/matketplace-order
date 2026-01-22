import db from "../../database/db.js";

const saveTokenVerifDb = async (
  user_id,
  verif_token,
  created_at,
  expires_at,
) => {
  const [queryResult] = await db.query(
    "insert into verifToken (userid, verif_token, created_at, expires_at, used) values (?, ?, ?, ?, ?)",
    [user_id, verif_token, created_at, expires_at, false],
  );

  if (queryResult.affectedRows > 0) {
    return true;
  } else {
    return false;
  }
};

export default saveTokenVerifDb;
