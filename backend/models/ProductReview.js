// 构建Review模型,用于存储商品评价信息,数据库中创建一个productReviews表
const mongoose = require("mongoose");
// 构建Review模型,包括商品ID、用户ID、用户名、评价消息、评价值等信息
const ProductReviewSchema = new mongoose.Schema(
  {
    productId: String,
    userId: String,
    userName: String,
    reviewMessage: String,
    reviewValue: Number,
  },
  // timestamps: true表示自动添加创建时间和更新时间
  { timestamps: true }
);

module.exports = mongoose.model("ProductReview", ProductReviewSchema);
