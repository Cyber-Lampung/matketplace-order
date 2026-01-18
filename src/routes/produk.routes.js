import express from "express";
import multer from "multer";
import path from "path";
import getProdukController from "../controllers/produk.controller/getProduk.controller.js";
import checkTokenHeader from "../middleware/checkTokenHeader.js";
import saveFileController from "../controllers/produk.controller/saveFile.controller.js";

// definisikan multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "src/assets/uploads/imagesProduk/"); // folder tujuan
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
    saveFileController(req, res, next);
  },
);

export default router;
