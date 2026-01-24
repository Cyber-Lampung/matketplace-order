import db from "../../database/db.js";

const checkProdukInformationDb = async (produk_id) => {
  const [queryResponse] = await db.query(
    "select produk_data from produks_list where produk_id = ?",
    [produk_id],
  );

  if (queryResponse[0]) {
    return { status: true, data: queryResponse[0] };
  } else {
    return { status: false };
  }
};

export default checkProdukInformationDb;
