// 构建Cart模型, 用于存储购物车信息,数据库中创建一个carts表
const mongoose = require("mongoose");
// 创建购物车模型,模型包括用户ID、商品ID、数量等信息
const CartSchema = new mongoose.Schema(
  {
    userId: {
      // mongoose.Schema.Types.ObjectId表示一个MongoDB对象ID,此处引用了User模型的ID
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    items: [
      {
        productId: {
          // mongoose.Schema.Types.ObjectId表示一个MongoDB对象ID,此处引用了Product模型的ID
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          min: 1,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Cart", CartSchema);
