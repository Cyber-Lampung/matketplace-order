import db from "../../database/db.js";

const saveProdukModel = async (produk_id, user_id, produkData) => {
  // save data produk
  const [saveProduk] = await db.query(
    "insert into produks (produk_id, user_i d, produks_order) values (?, ?, ?)",
    [produk_id, user_id, produkData],
  );
  console.log(saveProduk);
};

export default saveProdukModel;
