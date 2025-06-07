const Feature = require("../../models/Feature");

const addFeatureImage = async (req, res) => {
  try {
    const { image } = req.params;
    if (!image) {
      return res.status(400).json({
        success: false,
        msg: "图片不能为空",
      });
    }
    const featureImage = new Feature({
      image,
    });
    await featureImage.save();
    res.status(200).json({
      success: true,
      msg: "图片上传成功",
      data: featureImage,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      msg: "图片上传失败",
      error: error.message,
    });
  }
};

const getFeatureImages = async (req, res) => {
  try {
    const featureImages = await Feature.find();

    if (!featureImages || featureImages.length === 0) {
      return res.status(404).json({
        success: false,
        msg: "没有图片",
      });
    }
    res.status(200).json({
      success: true,
      msg: "图片获取成功",
      data: featureImages,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      msg: "图片获取失败",
      error: error.message,
    });
  }
};

module.exports = {
  addFeatureImage,
  getFeatureImages,
};
