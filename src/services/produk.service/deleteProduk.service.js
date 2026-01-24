import deleteProduk from "../../model/repository/produk.repository/deleteProduk.model.js";

const deleteProdukService = async (produk_id) => {
  // validasi produk_id

  if (!produk_id) {
    return {
      statusCode: 401,
      status: false,
      message: "invalid produk id is not empety",
    };
  }

  //   dibuat untuk tidak search user terlebih dahulu
  const searchDeleteProduk = await deleteProduk(produk_id);

  if (searchDeleteProduk) {
    return { statusCode: 200, status: 200, message: "succes delete produk" };
  } else {
    return {
      statusCode: 404,
      status: 404,
      message: "invalid delete produk , produk not found",
    };
  }
};

export default deleteProdukService;
