import deleteProdukService from "../../services/produk.service/deleteProduk.service.js";

const deleteProdukController = async (req, res, next) => {
  // ambil user_id dari headers atau cookie
  const user_id = req.user_id;

  const responseDeleteProduk = await deleteProdukService(user_id);

  return res.status(404).json({
    status: responseDeleteProduk.status,
    message: responseDeleteProduk.message,
  });

  //   console.log(responseDeleteProduk);
};

export default deleteProdukController;
