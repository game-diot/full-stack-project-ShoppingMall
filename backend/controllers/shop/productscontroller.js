const Product = require("../../models/Product");

exports.getFilteredProducts = async (req, res) => {
  try {
    const { category = [], brand = [], storBy = "price-up" } = req.query;

    let fliters = {};

    if (category.length) {
      fliters.category = { $in: category.split(",") };
    }

    if (brand.length) {
      fliters.brand = { $in: brand.split(",") };
    }

    let sortOrder = 1;

    switch (storBy) {
      case "price-up":
        sortOrder.price = 1;
        break;
      case "price-down":
        sortOrder.price = -1;
        break;
      case "title-a-z":
        sortOrder.title = 1;
        break;
      case "title-z-a":
        sortOrder.title = -1;
        break;
      default:
        sortOrder.price = 1;
        break;
    }

    const products = await Product.find(fliters).sort(sortOrder);

    res.status(200).json({
      success: true,
      products,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      msg: "服务器错误",
    });
  }
};

exports.getProductDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({
        success: false,
        msg: "商品不存在",
      });
    }
    res.status(200).json({
      success: true,
      product,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      msg: "服务器错误",
    });
  }
};
