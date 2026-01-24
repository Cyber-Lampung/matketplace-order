import db from "../../database/db.js";

const deleteProduk = async (produk_id) => {
  const [querySearchProduk] = await db.query(
    "delete from produks_list where produk_id = ?",
    [produk_id],
  );

  //   check apakah user ada atau tidak jika tidak maka kembalikan false

  if (querySearchProduk.affectedRows > 0) {
    return true;
  } else {
    return false;
  }
};

export default deleteProduk;
