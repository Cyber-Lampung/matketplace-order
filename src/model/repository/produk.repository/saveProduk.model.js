import db from "../../database/db.js";

const saveProdukModel = async (produk_id, user_id, produkData) => {
  // save data produk
  const [saveProduk] = await db.query(
    "insert into produks (produk_id, user_id, produks_order) values (?, ?, ?)",
    [produk_id, user_id, JSON.stringify(produkData)],
  );

  if (saveProduk.affectedRows > 0) {
    return { status: true };
  } else {
    return { status: false, message: "error save produk in db" };
  }
};

export default saveProdukModel;
