import db from "../../database/db.js";

const verifikasiTokenModel = async (user_id) => {
  const [resultQuery] = await db.query(
    "select verif_token from verifToken where user_id = ?",
    [user_id],
  );

  if (resultQuery[0]) {
    return resultQuery[0];
  } else {
    return false;
  }
};

export default verifikasiTokenModel;
