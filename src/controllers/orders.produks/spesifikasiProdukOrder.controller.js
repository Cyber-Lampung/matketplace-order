import searchProdukByProdukIdService from "../../services/orders.produks/getProdukSpesifikasi.service.js";

const speksifikasiProdukController = async (req, res, next) => {
  try {
    const user_id = req.user_id;

    if (!user_id) {
      return res.status(401).json({
        statusCode: 401,
        status: false,
        message: "invalid user_id not modified",
      });
    }

    const { checkOutInformation } = req.body;

    if (!checkOutInformation || !req.body) {
      return res.status(400).json({
        statusCode: 400,
        status: false,
        message: "checkOutInformaion not empety",
      });
    }

    const { produk_id } = checkOutInformation;

    const { statusCode, status, message, data } =
      await searchProdukByProdukIdService(produk_id);

    if (status) {
      return res.status(statusCode).json({
        statusCode: statusCode,
        status: status,
        message: message,
        data: data,
      });
    } else {
      return res
        .status(statusCode)
        .json({ statusCode: statusCode, status: status, message: message });
    }
  } catch {
    return res
      .status(400)
      .json({ statusCode: 400, status: false, message: "bad request" });
  }
};

export default speksifikasiProdukController;
