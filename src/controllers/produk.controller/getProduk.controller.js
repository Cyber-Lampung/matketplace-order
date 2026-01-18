import getProdukService from "../../services/produk.service/getProduk.service.js";

const getProdukController = async (req, res, next) => {
  // ambil response dari database untuk mendapatkan produk LIST
  const produkListService = await getProdukService();
  console.log(produkListService);

  if (produkListService.status === true) {
    return res.status(200).json({
      status: true,
      message: "succes get data produk",
      produk: produkListService.dataProduk,
    });
  }
};
export default getProdukController;
