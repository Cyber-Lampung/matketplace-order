// all module for local and production
import express from "express";
import cors from "cors";
import helmet from "helmet";
import * as dotenv from "dotenv";
import { rateLimit } from "express-rate-limit";
import cookieParser from "cookie-parser";
dotenv.config({ debug: true });

// config rate limit untuk mitigasi hit endpoint terlalu banyak

const limit = rateLimit({
  windowMs: 1 * 60 * 1000, // lama limit untuk per Ip => 15 menit ( menyesuaikan )
  max: 10, // limit untuk hit yang diperbolehkan setiap ip
  standardHeaders: "draft-7", // setting IETF standar rateLimiting headers
  legacyHeaders: false,
});

const app = express();
app.use(limit);

// public folder

app.use(express.static("public/"));

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  }),
);
app.use(cookieParser());
app.use(helmet());

// import Route
import userRoutes from "./routes/user.routes.js";
import produkRoute from "./routes/produk.routes.js";

// app

app.get("/", (req, res) => {
  res.send("server is Alive ");
});

app.use("/users", userRoutes);
app.use("/produk", produkRoute);
// app.use("/sessions")

// dev testing
// app.listen(PORT, () => {
//   console.log(`server berjalan pada port ${PORT}`);
// });

// deploy prodaction
export default app;
