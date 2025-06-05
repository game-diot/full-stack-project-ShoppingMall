const Product = require("../../models/Product");

// 搜索
exports.search = async (req, res) => {
  try {
    const { keyword } = req.params;
    if (!keyword || typeof keyword !== "string") {
      return res.status(400).json({
        success: false,
        msg: "搜索关键字不能为空",
      });
    }
    const regEx = new RegExp(keyword, "i");
    const createSearchQuery = {
      $or: [
        { name: regEx },
        { description: regEx },
        { category: regEx },
        { brand: regEx },
      ],
    };
    const searchResult = await Product.find(createSearchQuery);
    if (!searchResult.length) {
      return res.status(404).json({
        success: false,
        msg: "没有搜索到结果",
      });
    }
    res.status(200).json({
      success: true,
      msg: "搜索成功",
      data: searchResult,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      msg: "搜索失败",
    });
  }
};
