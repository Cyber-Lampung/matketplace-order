import express from "express";
import checkTokenHeader from "../middleware/checkTokenHeader.js";
import checkOutController from "../controllers/orders.produks/checkOutProduk.controller.js";
import speksifikasiProdukController from "../controllers/orders.produks/spesifikasiProdukOrder.controller.js";

// initialisasi router
const router = express.Router();

// => getProduk => checkout
// => hitung jarak lokasi pengiriman
// => hitung total belanjaan
// => catat riwayat belanja
// => status pembayaran pending ?

// get_produk
router.get("/order.riwayat", (req, res, next) => {
  return res.send("okee");
});

router.get("/order/:produk_id", checkTokenHeader, (req, res, next) => {
  speksifikasiProdukController(req, res, next);
});

// handel untuk user jika melakukan pembelian
router.post("/order/checkout", checkTokenHeader, (req, res, next) => {
  checkOutController(req, res, next);
});

export default router;
