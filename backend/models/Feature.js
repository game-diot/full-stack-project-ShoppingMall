// 构建Feature模型,用于存储商品评价信息,数据库中创建一个features表
const mongoose = require("mongoose");
// 构建Feature模型,包括商品ID、用户ID、用户名、评价消息、评价值等信息
const FeatureSchema = new mongoose.Schema(
  {
    image: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Feature", FeatureSchema);
