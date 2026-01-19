import saveProdukModel from "../../model/repository/produk.repository/saveProduk.model.js";
import generateUUID from "../../utils/generateUUID.js";

const saveProdukService = (
  user_id,
  pathFileImage,
  name_produk,
  harga,
  rating,
) => {
  // validasi apakah pathFileImage mengandung ext

  if (!pathFileImage) {
    return { status: false, message: "files is empety" };
  }

  if (!name_produk || !harga || !rating) {
    return { status: false, message: "empety fields" };
  }

  const regexFileImage = /(.png|.jpg|.webp)/s;

  const validasiExtFileImage = regexFileImage.test(pathFileImage);

  if (!validasiExtFileImage) {
    return { status: false, message: "files not permision for in" };
  }

  //   produk_id

  const produk_id = generateUUID();

  //   data produk
  const produkData = {
    pathFileImage: pathFileImage,
    name_produk: name_produk,
    harga: harga,
    rating: rating,
  };

  console.log(produkData);

  const saveProdukInDb = saveProdukModel(produk_id, user_id, produkData);
};

export default saveProdukService;
