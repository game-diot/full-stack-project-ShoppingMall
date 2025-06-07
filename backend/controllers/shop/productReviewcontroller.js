const Order = require("../models/order");
const Product = require("../models/product");
const ProductReview = require("../models/productReview");

exports.createProductReview = async (req, res) => {
  try {
    const { userId, productId, reviewMessage, reviewValue } = req.body;
    const order = await Order.findOne({
      userId,
      "orderItems.productId": productId,
    });
    if (!order) {
      return res.status(400).json({
        success: false,
        message: "您没有购买该商品，无法评价",
      });
    }
    const existingReview = await ProductReview.findOne({
      userId,
      productId,
    });
    if (existingReview) {
      return res.status(400).json({
        success: false,
        message: "您已经评价过该商品",
      });
    }
    const productReview = new ProductReview({
      userId,
      productId,
      userName,
      reviewMessage,
      reviewValue,
    });
    await productReview.save();
    const reviews = await ProductReview.findById(productId);
    const averageReviewValue = reviews.reduce(
      (total, review) => total + review.reviewValue,
      0 / reviews.length
    );
    await Product.findByIdAndUpdate(productId, {
      averageReviewValue,
    });
    res.status(201).json({
      success: true,
      message: "评价成功",
      data: productReview,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "评价失败",
    });
  }
};

exports.getProductReviews = async (req, res) => {
  try {
    const { productId } = req.params;
    const reviews = await ProductReview.find({ productId });
    res.status(200).json({
      success: true,
      message: "获取评价成功",
      data: reviews,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "获取评价失败",
    });
  }
};
