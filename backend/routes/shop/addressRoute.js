const express = require("express");
const router = express.Router();

const {
  addAddress,
  getAddress,
  updateAddress,
  deleteAddress,
} = require("../../controllers/shop/addresscontroller");

router.post("/add", addAddress);
router.get("/get", getAddress);
router.put("/update/:userId/:addressId", updateAddress);
router.delete("/delete/:userId/:addressId", deleteAddress);

module.exports = router;
