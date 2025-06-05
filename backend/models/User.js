//构建User模型，用于再数据库中存储用户信息，理解为在数据库中创建User表
const mongoose = require("mongoose");
// 创建User模型，包括用户名、邮箱、密码、角色等信息
const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "user",
  },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
