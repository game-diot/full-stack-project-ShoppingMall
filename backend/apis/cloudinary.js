require("dotenv").config();
const cloudinary = require("cloudinary").v2;
const multer = require("multer");

// 从环境变量中获取 Cloudinary 配置
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new multer.memoryStorage();

async function uploadImageToCloudinary(image) {
  try {
    const result = await cloudinary.uploader.upload(image, {
      resource_type: "image",
    });
  } catch (error) {
    console.error("Error uploading image to Cloudinary:", error);
    throw error;
  }
  return result;
}

const upload = multer({ storage: storage });

module.exports = {
  uploadImageToCloudinary,
  upload,
};
