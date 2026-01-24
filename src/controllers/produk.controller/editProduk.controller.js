import { z } from "zod";
import editProdukService from "../../services/produk.service/editProduk.service.js";

// 1. Definisikan Skema Validasi (PATCH: semua field optional)
const updateSchema = z.object({
  nameProduk: z.string().min(3, "Minimal 3 karakter").optional(),
  harga: z.number().positive("Harga harus angka positif").optional(),
  rating: z.number().min(0).max(5).optional(),
});

const editProdukController = async (req, res, next) => {
  try {
    const produk_id = req.headers.produk_id;

    const validation = updateSchema.safeParse(req.body);

    if (!validation.success) {
      return res.status(400).json({
        status: 400,
        message: "Validation Error",
        errors: validation.error.format(),
      });
    }

    // ambil data update
    const { nameProduk, harga, rating } = req.body;

    const responseEditProduk = await editProdukService(
      produk_id,
      nameProduk,
      harga,
      rating,
    );

    if (responseEditProduk.status) {
      return res
        .status(200)
        .json({ status: 200, message: responseEditProduk.message });
    } else {
      return res.status(400).json({
        status: 400,
        message: responseEditProduk.message,
      });
    }
  } catch {
    return res.status(400).json({ status: 400, message: "bad request" });
  }
};

export default editProdukController;
