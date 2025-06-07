const Address = require("../../models/Address");

// 添加地址
const addAddress = async (req, res) => {
  try {
    const { userId, address, city, pincode, phone, notes } = req.body;
    if (!userId || !address || !city || !pincode || !phone || !notes) {
      return res.status(400).json({
        success: false,
        msg: "请填写所有字段",
      });
    }
    const newAddress = new Address({
      userId,
      address,
      city,
      pincode,
      phone,
      notes,
    });
    await newAddress.save();
    res.status(200).json({
      success: true,
      msg: "添加地址成功",
      data: newAddress,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      msg: "添加地址失败",
    });
  }
};

const getAddress = async (req, res) => {
  try {
    const { userId } = req.body;
    if (!userId) {
      return res.status(400).json({
        success: false,
        msg: "请填写所有字段",
      });
    }
    const addresses = await Address.find({ userId });
    if (!addresses.length) {
      return res.status(404).json({
        success: false,
        msg: "没有地址",
      });
    }
    res.status(200).json({
      success: true,
      msg: "获取地址成功",
      data: addresses,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      msg: "获取地址失败",
    });
  }
};

const updateAddress = async (req, res) => {
  try {
    const { userId, addressId } = req.params;
    const formData = req.body;

    if (!userId || !addressId) {
      return res.status(400).json({
        success: false,
        msg: "请填写所有字段",
      });
    }
    const address = await Address.findOneAndUpdate(
      { userId, _id: addressId },
      formData,
      { new: true }
    );
    if (!address) {
      return res.status(404).json({
        success: false,
        msg: "地址不存在",
      });
    }
    res.status(200).json({
      success: true,
      msg: "更新地址成功",
      data: address,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      msg: "更新地址失败",
    });
  }
};

const deleteAddress = async (req, res) => {
  try {
    const { userId, addressId } = req.params;
    if (!userId || !addressId) {
      return res.status(400).json({
        success: false,
        msg: "请填写所有字段",
      });
    }
    const address = await Address.findOneAndDelete({ userId, _id: addressId });
    if (!address) {
      return res.status(404).json({
        success: false,
        msg: "地址不存在",
      });
    }
    res.status(200).json({
      success: true,
      msg: "删除地址成功",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      msg: "删除地址失败",
    });
  }
};

module.exports = {
  addAddress,
  getAddress,
  updateAddress,
  deleteAddress,
};
