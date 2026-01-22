import express from "express";
import multer from "multer";
import path from "path";
import getProdukController from "../controllers/produk.controller/getProduk.controller.js";
import checkTokenHeader from "../middleware/checkTokenHeader.js";
import saveFileController from "../controllers/produk.controller/saveFileProduk.controller.js";
import deleteProdukController from "../controllers/produk.controller/deleteProduk.controller.js";
import editProdukController from "../controllers/produk.controller/editProduk.controller.js";

// definisikan multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/images/"); // folder tujuan
  },

  filename: function (req, file, cb) {
    // mengambil extensi dari file asli, misal : .png
    const ext = path.extname(file.originalname);

    // membuat nama unix untuk setiap file
    const unixFileName = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + unixFileName + ext);
  },
});

const upload = multer({ storage: storage });

// membuat router
const router = express.Router();

// route for produk

// fiture admin
router.get("/produk/list", checkTokenHeader, (req, res, next) => {
  // controller for get produk
  getProdukController(req, res, next);
});

// upload produk
router.post(
  "/produk/upload",
  upload.single("file_upload"),
  (req, res, next) => {
    console.log(req.file);
    saveFileController(req, res, next);
  },
);

router.delete("/produk/delete", checkTokenHeader, (req, res, next) => {
  deleteProdukController(req, res, next);
});

// edit produk
router.patch("/produk/edit", (req, res, next) => {
  editProdukController(req, res, next);
});

export default router;
