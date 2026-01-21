import express from "express";
import checkTokenHeader from "../middleware/checkTokenHeader.js";
import registerControler from "../controllers/userRegister.controller.js";
import DeleteAccount from "../controllers/deleteAccount.controller.js";
import getUserController from "../controllers/getUser.controller.js";
import updateUserController from "../controllers/updateUser.controller.js";
import checkEmail from "../middleware/checkEmail.js";
import emailUsed from "../middleware/emailUsed.js";
import loginController from "../controllers/login.controller.js";
import verifikasiTokenController from "../controllers/verifikasiToken/verifikasiToken.controller.js";
// import checkParams from "../middleware/checkParams.js";

const router = express.Router();
// router.use(checkTokenHeader);

router.get("/user", checkTokenHeader, (req, res, next) => {
  // controller
  getUserController(req, res, next);
});

router.post("/register", checkEmail, emailUsed, (req, res, next) => {
  // controller
  registerControler(req, res, next);
});

router.post("/login", checkEmail, (req, res, next) => {
  // controller
  loginController(req, res, next);
});

router.patch("/user/edit", checkTokenHeader, checkEmail, (req, res, next) => {
  // controller
  updateUserController(req, res, next);
});

router.delete("/delete", checkTokenHeader, (req, res, next) => {
  // controller
  DeleteAccount(req, res, next);
});

// verifikasi user

router.get("/verifikasiToken", (req, res, next) => {
  verifikasiTokenController(req, res, next);
});

export default router;
