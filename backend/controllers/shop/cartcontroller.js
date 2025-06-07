const Cart = require("../../models/Cart");
const Product = require("../../models/Product");

exports.addToCart = async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;
    if (!userId || !productId || !quantity <= 0) {
      return res.status(400).json({
        succeed: false,
        message: "错误的请求！",
      });
    }
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({
        succeed: false,
        message: "商品不存在！",
      });
    }

    const cart = await Cart.findOne({ userId });
    if (!cart) {
      const newCart = new Cart({
        userId,
        products: [{ productId, quantity }],
      });
    }
    const findCurrentProduct = cart.products.find(
      (product) => product.productId.toString() == productId
    );
    if (findCurrentProduct === -1) {
      cart.products.push({ productId, quantity });
    } else {
      findCurrentProduct.quantity += quantity;
    }
    await cart.save();
    res.status(200).json({
      succeed: true,
      data: cart,
      message: "添加成功！",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      succeed: false,
      message: "服务器错误！",
    });
  }
};

exports.fentchCart = async (req, res) => {
  try {
    const { userId } = req.params;
    if (!userId) {
      return res.status(400).json({
        succeed: false,
        message: "错误的请求！",
      });
    }
    const cart = await Cart.findOne({ userId }).populate({
      path: "products.productId",
      model: "Product",
      select: "name price",
    });
    if (!cart) {
      return res.status(404).json({
        succeed: false,
        message: "购物车为空！",
      });
    }
    const validProducts = cart.products.filter(
      (product) => product.productId !== null
    );
    if (validProducts.length < cart.products.length) {
      cart.products = validProducts;
      await cart.save();
    }
    const populateCart = validProducts.map((product) => ({
      productId: product.productId._id,
      image: product.productId.image,
      title: product.productId.title,
      price: product.productId.price,
      salePrice: product.productId.salePrice,
      quantity: product.quantity,
    }));
    res.status(200).json({
      succeed: true,
      data: {
        ...Cart._doc,
        products: populateCart,
      },
      message: "获取成功！",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      succeed: false,
      message: "服务器错误！",
    });
  }
};

exports.updateCart = async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;
    if (!userId || !productId || !quantity <= 0) {
      return res.status(400).json({
        succeed: false,
        message: "错误的请求！",
      });
    }
    const cart = await Cart.findOne({ userId });
    if (!cart) {
      return res.status(404).json({
        succeed: false,
        message: "购物车为空！",
      });
    }
    const findCurrentProduct = cart.products.find(
      (product) => product.productId.toString() == productId
    );
    if (findCurrentProduct === -1) {
      return res.status(404).json({
        succeed: false,
        message: "商品不存在！",
      });
    }
    findCurrentProduct.quantity = quantity;
    await cart.save();
    await cart.populate({
      path: "products.productId",
      model: "Product",
      select: "name price",
    });
    const populateCart = cart.products.map((product) => ({
      productId: product.productId._id ? product.productId._id : null,
      image: product.productId.image ? product.productId.image : null,
      title: product.productId.title ? product.productId.title : "未找到商品",
      price: product.productId.price ? product.productId.price : null,
      salePrice: product.productId.salePrice
        ? product.productId.salePrice
        : null,
      quantity: product.quantity,
    }));
    res.status(200).json({
      succeed: true,
      data: {
        ...Cart._doc,
        products: populateCart,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      succeed: false,
      message: "服务器错误！",
    });
  }
};

exports.deleteCart = async (req, res) => {
  try {
    const { userId, productId } = req.params;
    if (!userId || !productId) {
      return res.status(400).json({
        succeed: false,
        message: "错误的请求！",
      });
    }
    const cart = await Cart.findOne({ userId }).populate({
      path: "products.productId",
      model: "Product",
      select: "name price",
    });
    if (!cart) {
      return res.status(404).json({
        succeed: false,
        message: "购物车为空！",
      });
    }
    cart.products = cart.products.filter(
      (product) => product.productId.toString() !== productId
    );
    await cart.save();
    const populateCart = cart.products.map((product) => ({
      productId: product.productId._id ? product.productId._id : null,
      image: product.productId.image ? product.productId.image : null,
      title: product.productId.title ? product.productId.title : "未找到商品",
      price: product.productId.price ? product.productId.price : null,
      salePrice: product.productId.salePrice
        ? product.productId.salePrice
        : null,
      quantity: product.quantity,
    }));
    res.status(200).json({
      succeed: true,
      data: {
        ...Cart._doc,
        products: populateCart,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      succeed: false,
      message: "服务器错误！",
    });
  }
};
