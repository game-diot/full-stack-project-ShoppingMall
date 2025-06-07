const paypal = require("../../apis/paypal");
const Order = require("../../models/Order");
const Cart = require("../../models/Cart");
const Product = require("../../models/Product");

const createOrder = async (req, res) => {
  try {
    const {
      userId,
      cartItems,
      addressInfo,
      orderStatus,
      paymentMethod,
      paymentStatus,
      totalAmount,
      orderDate,
      orderUpdateDate,
      paymentId,
      payerId,
      cartId,
    } = req.body;

    const create_payment_json = {
      intent: "sale",
      payer: {
        payment_method: "paypal",
      },
      redirect_urls: {
        return_url: "http://localhost:5173/shop/paypal-return",
        cancel_url: "http://localhost:5173/shop/paypal-cancel",
      },
      transactions: [
        {
          item_list: {
            items: cartItems.map((item) => ({
              name: item.product.title,
              sku: item.product._id,
              price: item.product.price,
              currency: "USD",
              quantity: item.quantity,
            })),
          },
          amount: {
            currency: "USD",
            total: totalAmount,
          },
          description: "Order Description",
        },
      ],
    };
    paypal.payment.create(create_payment_json, async function (error, payment) {
      if (error) {
        throw error;
        return res.status(500).json({
          success: false,
          msg: "创建订单失败",
        });
      } else {
        const order = await Order.create({
          userId,
          cartItems,
          addressInfo,
          orderStatus,
          paymentMethod,
          paymentStatus,
          totalAmount,
          orderDate,
          orderUpdateDate,
          paymentId,
          payerId,
          cartId,
        });
        await order.save();
        const approvalURL = payment.links.find(
          (link) => link.rel === "approval_url"
        ).href;
        res.status(200).json({
          success: true,
          msg: "创建订单成功",
          orderId: order._id,
          approvalURL,
        });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      msg: "创建订单失败",
    });
  }
};

const capturePayment = async (req, res) => {
  try {
    const { paymentId, payerId, orderId } = req.body;
    if (!orderId) {
      return res.status(404).json({
        success: false,
        msg: "订单不存在",
      });
    }
    order.paymentStatus = "paid";
    order.orderStatus = "processing";
    order.paymentId = paymentId;
    order.payerId = payerId;

    for (const item of order.cartItems) {
      const product = await Product.findById(item.product);
      if (!product) {
        return res.status(404).json({
          success: false,
          msg: `${product.title}不存在`,
        });
      }
      product.stock -= item.quantity;
      await product.save();
    }
    await Cart.findByIdAndDelete(order.cartId);
    await order.save();
    res.status(200).json({
      success: true,
      msg: "支付成功",
    });
  } catch (error) {}
};

const getAllOrders = async (req, res) => {
  try {
    const userId = req.params;
    const orders = await Order.find({ userId });
    if (!orders) {
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
    const orderId = req.params;
    const order = await Order.findById(orderId);
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
  } catch (errot) {
    res.status(500).json({
      success: false,
      msg: "获取订单详情失败",
    });
  }
};
module.exports = {
  createOrder,
  capturePayment,
  getAllOrders,
  getOrderDetails,
};
