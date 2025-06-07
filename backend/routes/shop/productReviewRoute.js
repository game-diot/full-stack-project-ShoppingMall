const express = require("express");

const {
  createProductReview,
  getProductReviews,
} = require("../../controllers/shop/productReviewcontroller");

const router = express.Router();

router.post("/add", createProductReview);
router.get("/:productId", getProductReviews);

module.exports = router;
