const express = require("express");
const router = express.Router();
const {
  addProduct,
  addProductImage,
  deleteProduct,
  getAllProducts,
  editProduct,
} = require("../../controllers/admin/productscontroller");
const { upload } = require("../../apis/cloudinary");

router.post("/add", addProduct);
router.post("/addImage", upload.array("images"), addProductImage);
router.delete("/delete/:id", deleteProduct);
router.get("/get", getAllProducts);
router.put("/edit/:id", editProduct);

module.exports = router;
