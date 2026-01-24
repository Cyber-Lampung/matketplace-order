import deleteProdukService from "../../services/produk.service/deleteProduk.service.js";

const deleteProdukController = async (req, res, next) => {
  try {
    const { produkId } = req.body;

    // manual
    const produk_id = "2f16ef7e-5fac-40d4-8989-214c5da81b87";

    const { statusCode, status, message } = await deleteProdukService(
      produk_id || produkId,
    );

    if (status) {
      return res
        .status(statusCode)
        .json({ statusCode: statusCode, status: true, message: message });
    } else {
      return res
        .status(statusCode)
        .json({ statusCode: statusCode, status: false, message: message });
    }
  } catch {
    return res
      .status(400)
      .json({ statusCode: 400, status: false, message: "bad request" });
  }
};

export default deleteProdukController;
