import saveProdukService from "../../services/produk.service/saveProduk.service.js";

const saveFileController = (req, res, next) => {
  //  yang dibutuhkan untuk produk
  //   const pathFile = req.file.path;
  //   const { nameProduk, harga, rating } = req.body;

  const pathFile = req.file.path;
  const { name_produk, harga, rating } = req.body; //  console.log(pathFile, nameProduk, harga, rating);
  const user_id = req.user_id;

  console.log(pathFile, name_produk);

  // kirim data ke service

  const saveDataProdukService = saveProdukService(
    user_id,
    pathFile,
    name_produk,
    harga,
    rating,
  );
};

export default saveFileController;
