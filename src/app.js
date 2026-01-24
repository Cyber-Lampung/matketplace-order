// all module for local and production
import express from "express";
import cors from "cors";
import helmet from "helmet";
import * as dotenv from "dotenv";
import { rateLimit } from "express-rate-limit";
import cookieParser from "cookie-parser";
dotenv.config({ debug: true });
import path from "path";
import { fileURLToPath } from "url";

// config rate limit untuk mitigasi hit endpoint terlalu banyak
const limit = rateLimit({
  windowMs: 1 * 60 * 1000, // lama limit untuk per Ip => 15 menit ( menyesuaikan )
  max: 10, // limit untuk hit yang diperbolehkan setiap ip
  standardHeaders: "draft-7", // setting IETF standar rateLimiting headers
  legacyHeaders: false,
});

const app = express();

// definisikan __filename dan __dirname

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// public folder
app.use(express.static("public/"));

// app.use(limit);
app.use(
  cors({
    origin: "http://localhost:3000",
  }),
);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      ...helmet.contentSecurityPolicy.getDefaultDirectives(),
      // spesifik allow inline style atributs on element
      "style-src-attr": ["'unsafe-inline'"],
      // keep your exisiting default-src or order directive
      "default-src": ["'self'"],
    },
  }),
);

// static folder public

app.use(
  "/uploads",
  express.static(path.join(__dirname, "..", "uploads/images/")),
);

// import Route
import userRoutes from "./routes/user.routes.js";
import produkRoute from "./routes/produk.routes.js";
import order_produks from "./routes/orders.routes.js";

// app

app.get("/", (req, res) => {
  res.send("server is Alive ");
});

app.use("/users", userRoutes);
app.use("/produk", produkRoute);
app.use("/orders", order_produks);
// app.use("/sessions")

// error path handling

app.use((req, res, next) => {
  return res.status(404).json({ status: 404, message: "path tidak ditemukan" });
});

// dev testing
// app.listen(PORT, () => {
//   console.log(`server berjalan pada port ${PORT}`);
// });

// deploy prodaction
export default app;
