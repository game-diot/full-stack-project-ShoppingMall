// 构建订单模型, 用于存储订单信息,数据库中创建一个orders表
const mongoose = require("mongoose");
// 创建订单模型,模型包括用户ID、购物车ID、购物车商品、地址信息、订单状态、支付方法、支付状态、总金额、订单日期、订单更新日期、支付ID、支付者ID等信息
const OrderSchema = new mongoose.Schema({
  userId: String,
  cartId: String,
  cartItems: [
    {
      productId: String,
      title: String,
      image: String,
      price: String,
      quantity: Number,
    },
  ],
  addressInfo: {
    addressId: String,
    address: String,
    city: String,
    pincode: String,
    phone: String,
    notes: String,
  },
  orderStatus: String,
  paymentMethod: String,
  paymentStatus: String,
  totalAmount: Number,
  orderDate: Date,
  orderUpdateDate: Date,
  paymentId: String,
  payerId: String,
});

module.exports = mongoose.model("Order", OrderSchema);
