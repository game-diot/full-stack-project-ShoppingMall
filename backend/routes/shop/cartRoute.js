const express = require("express");

const {
  addToCart,
  fentchCart,
  updateCart,
  deleteCart,
} = require("../../controllers/shop/cartcontroller");

const router = express.Router();

router.post("/add", addToCart);
router.get("/get/:userId", fentchCart);

router.put("/updateCart", updateCart);

router.delete("/:userId/:productId", deleteCart);

module.exports = router;
