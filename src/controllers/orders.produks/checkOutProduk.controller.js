import serviceLogicProdukCheckOut from "../../services/orders.produks/checkOutSeviceLogic.service.js";

const checkOutController = (req, res, next) => {
  try {
    const user_id = req.user_id;
    const { checkOutInformation } = req.body;

    if (!checkOutInformation) {
      return res.status(400).json({
        statusCode: 400,
        status: false,
        message: "produk not modified, bad request",
      });
    }

    const reponseLogicCheckOutProduk = serviceLogicProdukCheckOut(
      checkOutInformation,
      user_id,
    );

    // return res.json(checkOutInformation);
  } catch {
    return res
      .status(400)
      .json({ statusCode: 400, status: false, message: "bad request" });
  }
};

export default checkOutController;
