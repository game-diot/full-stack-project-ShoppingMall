const Order = require("../../models/Order");

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    if (!orders.length) {
      return res.status(404).json({
        success: false,
        msg: "没有订单",
      });
    }
    res.status(200).json({
      success: true,
      msg: "获取订单成功",
      data: orders,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      msg: "获取订单失败",
    });
  }
};

const getOrderDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findById(id);
    if (!order) {
      return res.status(404).json({
        success: false,
        msg: "订单不存在",
      });
    }
    res.status(200).json({
      success: true,
      msg: "获取订单详情成功",
      data: order,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      msg: "获取订单详情失败",
    });
  }
};

const updateOrderStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const order = await Order.findById(id);
    if (!order) {
      return res.status(404).json({
        success: false,
        msg: "订单不存在",
      });
    }
    await Order.findByIdAndUpdate(id, { status });
    res.status(200).json({
      success: true,
      msg: "更新订单状态成功",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      msg: "更新订单状态失败",
    });
  }
};

module.exports = {
  getAllOrders,
  getOrderDetails,
  updateOrderStatus,
};
