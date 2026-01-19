import db from "../../database/db.js";

const produkListModel = async () => {
  const [produkList] = await db.query(
    "select produk_id, user_id, produks_order from produks",
  );

  return { status: true, dataProduk: produkList };
};

export default produkListModel;
