import saveProdukService from "../../services/produk.service/saveProduk.service.js";

const saveFileController = (req, res, next) => {
  //  yang dibutuhkan untuk produk
  //   const pathFile = req.file.path;
  //   const { nameProduk, harga, rating } = req.body;
  const pathFile = req.file.filename;

  const { name_produk, harga_produk, rating_produk } = req.body; //  console.log(pathFile, nameProduk, harga, rating);
  const user_id = req.user_id;

  // kirim data ke service
  const saveDataProdukService = saveProdukService(
    user_id,
    pathFile,
    name_produk,
    harga_produk,
    rating_produk,
  );

  if (saveDataProdukService.status) {
    return res
      .status(201)
      .json({ status: 200, message: saveDataProdukService.message });
  } else {
    return res.status(429).json({
      status: 429,
      message: saveDataProdukService.message,
    });
  }
};

export default saveFileController;
