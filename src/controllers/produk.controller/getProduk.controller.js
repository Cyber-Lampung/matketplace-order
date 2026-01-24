import getProdukService from "../../services/produk.service/getProduk.service.js";

const getProdukController = async (req, res, next) => {
  try {
    // ambil response dari database untuk mendapatkan produk LIST
    const produkListService = await getProdukService();

    console.log(produkListService.dataProduk);

    if (produkListService.status === true) {
      return res.status(200).json({
        status: true,
        message: "succes get data produk",
        produk: produkListService.dataProduk,
      });
    }
  } catch {
    return res
      .status(400)
      .json({ statusCode: 400, status: false, message: "bad request" });
  }
};
export default getProdukController;
