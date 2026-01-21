import produkListModel from "../../model/repository/produk.repository/produkList.model.js";

const getProdukService = async () => {
  const responseModelProduk = await produkListModel();
  console.log(responseModelProduk);
  return responseModelProduk;
};

export default getProdukService;
