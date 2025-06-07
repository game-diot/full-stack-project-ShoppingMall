// user的控制器，主要是控制登录、注册、退出等功能
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../models/User");

// 登录
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // 检查用户是否存在
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        success: false,
        msg: "用户不存在",
      });
    }
    // 检查密码是否正确
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        msg: "密码错误",
      });
    }
    // 生成token
    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
        email: user.email,
        username: user.username,
      },
      // //////////////////////////////////////此处需注意.env
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );
    res
      .cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 3600000,
      })
      .json({
        success: true,
        msg: "登录成功",
        user: {
          id: user._id,
          role: user.role,
          email: user.email,
          username: user.username,
        },
      });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("服务器错误").json({
      success: false,
      msg: "服务器错误",
    });
  }
};

// 注册
const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // 检查用户是否已经存在
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        success: false,
        msg: "用户已存在",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // 创建新用户
    user = new User({
      username,
      email,
      password: hashedPassword,
    });

    await user.save();

    res.json({
      success: true,
      msg: "注册成功",
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("服务器错误").json({
      success: false,
      msg: "服务器错误",
    });
  }
};

// 退出
const logout = async (req, res) => {
  res.clearCookie("token");
  res.json({
    success: true,
    msg: "退出成功",
  });
};

module.exports = {
  login,
  register,
  logout,
};
