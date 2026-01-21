import deleteProduk from "../../model/repository/produk.repository/deleteProduk.model.js";

const deleteProdukService = async (user_id) => {
  // check user_id terlebih dahulu

  const checkUserId = await deleteProduk(user_id);

  if (!checkUserId) {
    return { status: false, message: "user id not found" };
  }

  //   dibuat untuk tidak search user terlebih dahulu
  const searchDeleteProduk = await deleteProduk(user_id);

  if (searchDeleteProduk) {
    return { status: 200, message: "succes delete produk" };
  } else {
    return { status: 404, message: "invalid delete produk , produk not found" };
  }
};

export default deleteProdukService;
