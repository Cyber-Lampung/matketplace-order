import db from "../../database/db.js";

export default function updateProdukFunc() {
  const searchProdukById = async (produk_id) => {
    //  search produk by id

    const [searchProduk] = await db.query(
      "select * from produks where produk_id = ? ",
      [produk_id],
    );

    if (searchProduk[0]) {
      return { status: true, data: searchProduk[0] };
    } else {
      return { status: false, data: "product not found" };
    }
  };

  const updateProduk = async (values) => {
    const [updateDataProduk] = await db.query(
      //   "update produks set produks_order = JSON_SET(atribut, '') produks where produk_id = ?",
      "UPDATE produks SET produks_order = JSON_SET(produks_order, '$.name_produk', 'adidas', '$.harga', 50,  '$.rating', 4.5) WHERE produk_id = '1ebee8b6-8358-4d7c-b1bf-d9a29eb65250';",
      values,
    );

    if (updateDataProduk.affectedRows > 0) {
      return { status: true, message: "succes update produk" };
    } else {
      return { status: false, message: "invalid update produk" };
    }
  };

  return { searchProdukById, updateProduk };
}
