import express from "express";
import checkTokenHeader from "../middleware/checkTokenHeader.js";
import registerControler from "../controllers/userRegister.controller.js";
import deleteAccount from "../controllers/deleteAccount.controller.js";
import getUserController from "../controllers/getUser.controller.js";
import updateUserController from "../controllers/updateUser.controller.js";
import checkEmail from "../middleware/checkEmail.js";
import emailUsed from "../middleware/emailUsed.js";
import loginController from "../controllers/login.controller.js";
import verifikasiTokenController from "../controllers/verifikasiToken/verifikasiToken.controller.js";
import checkInputanAttack from "../middleware/mitigasiInputan.js";
import logoutController from "../controllers/logout.controller.js";
// import checkParams from "../middleware/checkParams.js";

const router = express.Router();

// get user list
router.get("/user", checkTokenHeader, (req, res, next) => {
  // controller
  getUserController(req, res, next);
});

// endpoint for login user
router.post("/login", checkInputanAttack, checkEmail, (req, res, next) => {
  // controller
  loginController(req, res, next);
});

// endpoint for register user
router.post(
  "/register",
  emailUsed,
  checkEmail,
  checkInputanAttack,
  (req, res, next) => {
    // controller
    registerControler(req, res, next);
  },
);

// endpoint untuk edit user profile
router.patch("/edit", checkTokenHeader, checkEmail, (req, res, next) => {
  // controller
  updateUserController(req, res, next);
});

// endpoint logout

router.post("/logout", (req, res, next) => {
  logoutController(req, res, next);
});

// endpoint untuk delete user
router.delete("/delete", checkTokenHeader, (req, res, next) => {
  // controller
  deleteAccount(req, res, next);
});

// endpoint verifikasi user
router.get("/verifikasiToken", (req, res, next) => {
  verifikasiTokenController(req, res, next);
});

export default router;
