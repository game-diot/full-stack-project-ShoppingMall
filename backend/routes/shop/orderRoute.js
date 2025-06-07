const express = require("express");

const {
  createOrder,
  capturePayment,
  getAllOrders,
  getOrderDetails,
} = require("../../controllers/shop/ordercontroller");

const router = express.Router();

router.post("/create", createOrder);
router.post("/capture", capturePayment);
router.get("/list/:userId", getAllOrders);
router.get("/details/:id", getOrderDetails);

module.exports = router;
