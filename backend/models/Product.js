// 构建Product模型, 用于存储商品信息,数据库中创建一个products表
const mongoose = require("mongoose");
// 创建商品模型,模型包括图片、标题、描述、分类、品牌、价格、销售价格、库存、平均评价等信息
const ProductSchema = new mongoose.Schema(
  {
    image: String,
    title: String,
    description: String,
    category: String,
    brand: String,
    price: Number,
    salePrice: Number,
    totalStock: Number,
    averageReview: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
