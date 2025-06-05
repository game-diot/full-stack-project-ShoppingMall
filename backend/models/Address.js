// 构建地址模型, 用于存储地址信息,数据库中构建address表
const mongoose = require("mongoose");
// 构建地址模型,包括用户id、地址、城市、邮编、电话、备注等信息
const AddressSchema = new mongoose.Schema(
  {
    userId: String,
    address: String,
    city: String,
    pincode: String,
    phone: String,
    notes: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Address", AddressSchema);
