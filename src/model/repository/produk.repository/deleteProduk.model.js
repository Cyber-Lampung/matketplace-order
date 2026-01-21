import db from "../../database/db.js";

const deleteProduk = async (user_id) => {
  const [searchUserID] = await db.query("select user_id from users", [user_id]);

  //   check apakah user ada atau tidak jika tidak maka kembalikan false
  if (!searchUserID[0]) {
    return false;
  }

  const [resultDeleteProduk] = await db.query(
    "delete produks from produks where produk_id = ?",
    ["46ca019e-2814-49f2-a42a-3a65923f9974"],
  );

  if (resultDeleteProduk.affectedRows > 0) {
    return true;
  } else {
    return false;
  }
};

export default deleteProduk;
