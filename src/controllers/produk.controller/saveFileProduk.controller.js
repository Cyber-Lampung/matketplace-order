import { type } from "node:os";
import saveProdukService from "../../services/produk.service/saveProduk.service.js";

const saveFileController = async (req, res, next) => {
  try {
    // ambil path image

    const pathImage = req.file.path;

    const {
      name_produk,
      description,
      harga,
      stock,
      rating,
      kategori,
      kondisi,
    } = req.body;

    const responseServiceSaveFile = saveProdukService(
      pathImage,
      name_produk,
      description,
      harga,
      stock,
      rating,
      kategori,
      kondisi,
    );

    if (responseServiceSaveFile.status) {
      return res
        .status(responseServiceSaveFile.statusCode)
        .json({ statusCode: 201, status: true, message: "succes add produk" });
    }
  } catch {
    return res
      .status(400)
      .json({ statusCode: 400, status: false, message: "bad request" });
  }
};

export default saveFileController;
