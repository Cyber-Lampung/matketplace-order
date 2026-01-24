import db from "../../database/db.js";

const saveProdukModel = async (produk_id, upload_at, produkData) => {
  // save data produk
  const [saveProduk] = await db.query(
    "insert into produks_list (produk_id, upload_at, produk_data) values (?, ?, ?)",
    [produk_id, upload_at, produkData],
  );

  if (saveProduk.affectedRows > 0) {
    return { status: true };
  } else {
    return { status: false, message: "error save produk in db" };
  }
};

export default saveProdukModel;
