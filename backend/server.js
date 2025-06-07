const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRoute = require("./routes/auth/authRoute");
const adminOrderRoute = require("./routes/admin/orderRoute");
const adminProductsRoute = require("./routes/admin/productsRoute");
const commonFeatureRoute = require("./routes/common/featureRoute");
const shopAddressRoute = require("./routes/shop/addressRoute");
const shopOrderRoute = require("./routes/shop/orderRoute");
const shopProductsRoute = require("./routes/shop/productsRoute");
const shopProductReviewRoute = require("./routes/shop/productReviewRoute");
const shopCartRoute = require("./routes/shop/cartRoute");
const shopSearchRoute = require("./routes/shop/searchRoute");

mongoose
  .connect("mongodb://localhost:27017/shopping-test")
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log(error));

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/admin/orders", adminOrderRoute);
app.use("/api/admin/products", adminProductsRoute);

app.use("/api/common/features", commonFeatureRoute);
app.use("/api/shop/address", shopAddressRoute);
app.use("/api/shop/orders", shopOrderRoute);
app.use("/api/shop/products", shopProductsRoute);
app.use("/api/shop/productReview", shopProductReviewRoute);
app.use("/api/shop/cart", shopCartRoute);
app.use("/api/shop/search", shopSearchRoute);

app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));
