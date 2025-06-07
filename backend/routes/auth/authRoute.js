const express = require("express");
const router = express.Router();
const {
  login,
  logout,
  register,
} = require("../../controllers/auth/authcontroller");
const authMiddleware = require("../../middlewares/authmiddlewares");
router.post("/login", login);
router.post("/register", register);
router.post("/logout", logout);
router.get("/check-auth", authMiddleware, (req, res) => {
  res.status(200).json({
    success: true,
    msg: "用户已登录",
    data: req.user,
  });
});

module.exports = router;
