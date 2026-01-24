import checkProdukInformationDb from "../../model/repository/orders.produks/getSpesifikasiProduk.model.js";

const searchProdukByProdukIdService = async (produk_id) => {
  // validasi produk_id
  if (!produk_id) {
    return {
      statusCode: 400,
      status: false,
      message: "invalid, produkId not empety",
    };
  }

  const responseQueryProduk = await checkProdukInformationDb(produk_id);

  // ubah data produk dari stringify ke parse json asli

  // const revertJsonStringigy = JSON.parse(responseQueryProduk)

  if (responseQueryProduk.status) {
    return {
      statusCode: 200,
      status: true,
      message: "data ditemukan",
      data: responseQueryProduk.data,
    };
  } else {
    return { statusCode: 404, status: false, message: "not found" };
  }
};

export default searchProdukByProdukIdService;
