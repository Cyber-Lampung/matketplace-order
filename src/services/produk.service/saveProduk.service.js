import saveProdukModel from "../../model/repository/produk.repository/saveProduk.model.js";
import generateUUID from "../../utils/generateUUID.js";
import createdDateTime from "../../utils/createdDateTime.utils.js";

const saveProdukService = async (
  pathImage,
  name_produk,
  description,
  harga,
  stock,
  rating,
  kategori,
  kondisi,
) => {
  // get date time now

  const { dateTimeNow } = createdDateTime();

  // validasi apakah pathFileImage mengandung ext

  if (
    !pathImage ||
    !name_produk ||
    !description ||
    !harga ||
    !stock ||
    !rating ||
    !kategori ||
    !kondisi
  ) {
    return { status: false, message: "files is empety" };
  }

  const regexFileImage = /(.png$|.jpg$|.webp$)/s;

  const validasiExtFileImage = regexFileImage.test(pathImage);

  if (!validasiExtFileImage) {
    return { status: false, message: "files not permision for in" };
  }

  //   produk_id
  const produk_id = generateUUID();

  // get Time Now

  const upload_at = dateTimeNow();

  //   data produk
  const produkData = {
    pathImage: pathImage,
    produk_id: produk_id,
    name_produk: name_produk,
    description: description,
    harga: harga,
    stock: stock,
    rating: rating,
    kategori: kategori,
    kondisi: kondisi,
  };

  const jsonProduk = JSON.stringify(produkData);

  const saveProdukInDb = await saveProdukModel(
    produk_id,
    upload_at,
    jsonProduk,
  );

  if (saveProdukInDb.status) {
    return { status: true, message: "succes add produk" };
  } else {
    return { status: false, message: saveProdukInDb.status };
  }
};

export default saveProdukService;
