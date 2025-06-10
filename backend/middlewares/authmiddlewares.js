// Z:\000部署的项目\购物商城项目-用于上传GitHub\backend\middlewares\authmiddlewares.js

// 引入 dotenv 并加载环境变量
// 在 CommonJS 模块中，这样加载 dotenv 是最常见的
require("dotenv").config();

// 引入 jsonwebtoken 库
const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  const token = req.cookies.token; // 从 cookie 获取 token

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized user: No token provided!",
    });
  }

  try {
    // 验证 JWT
    // 确保从环境变量中获取密钥
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // 如果 process.env.JWT_SECRET 可能为 undefined，可以提供一个备用值，但强烈建议设置环境变量
    // const decoded = jwt.verify(token, process.env.JWT_SECRET || "YOUR_FALLBACK_SECRET_KEY");

    req.user = decoded; // 将解码后的用户数据附加到请求对象上
    next(); // 继续执行下一个中间件或路由处理器
  } catch (error) {
    // 处理 token 验证失败的情况 (例如 token 过期、无效签名等)
    console.error("JWT verification failed:", error.message); // 在服务器日志中记录错误
    return res.status(401).json({
      success: false,
      message: "Unauthorized user: Invalid or expired token!",
    });
  }
};

// 使用 CommonJS 的 module.exports 导出中间件函数
module.exports = authMiddleware;
