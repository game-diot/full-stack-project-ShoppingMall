const { uploadImageToCloudinary } = require("../../apis/cloudinary");
const Product = require("../../models/Product");

const addProductImage = async (req, res) => {
  try {
    const b64 = Buffer.from(req.file.buffer).toString("base64");
    let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
    const cldRes = await uploadImageToCloudinary(dataURI);
    res.json({
      success: true,
      msg: "图片上传成功",
      data: cldRes,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      msg: "图片上传失败",
    });
  }
};

const addProduct = async (req, res) => {
  try {
    const {
      image,
      title,
      description,
      category,
      brand,
      price,
      salePrice,
      totalStock,
      averageReview,
    } = req.body;
    console.log(averageReview, "averageReview");

    const product = new Product({
      image,
      title,
      description,
      category,
      brand,
      price,
      salePrice,
      totalStock,
      averageReview,
    });
    await product.save();
    res.status(200).json({
      success: true,
      msg: "添加商品成功",
      data: product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      msg: "添加商品失败",
    });
  }
};
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    if (!products.length) {
      return res.status(404).json({
        success: false,
        msg: "没有商品",
      });
    }
    res.status(200).json({
      success: true,
      msg: "获取商品成功",
      data: products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      msg: "获取商品失败",
    });
  }
};

const editProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      image,
      title,
      description,
      category,
      brand,
      price,
      salePrice,
      totalStock,
      averageReview,
    } = req.body;
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({
        success: false,
        msg: "商品不存在",
      });
    }
    product.image = image || product.image;
    product.title = title || product.title;
    product.description = description || product.description;
    product.category = category || product.category;
    product.brand = brand || product.brand;
    product.price = price === "" ? 0 : price || product.price;
    product.salePrice = salePrice === "" ? 0 : salePrice || product.salePrice;
    product.totalStock = totalStock || product.totalStock;
    product.averageReview = averageReview || product.averageReview;

    await product.save();
    res.status(200).json({
      success: true,
      msg: "编辑商品成功",
      data: product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      msg: "编辑商品失败",
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({
        success: false,
        msg: "商品不存在",
      });
    }
    res.status(200).json({
      success: true,
      msg: "删除商品成功",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      msg: "删除商品失败",
    });
  }
};

module.exports = {
  addProductImage,
  addProduct,
  getAllProducts,
  editProduct,
  deleteProduct,
};
