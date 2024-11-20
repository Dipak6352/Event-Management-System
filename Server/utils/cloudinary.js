// utils/cloudinary.js
const cloudinary = require("cloudinary").v2; // Ensure using v2
const fs = require("fs");

cloudinary.config({
  cloud_name: "dsrdjnu3v",
  api_key: "365488962388791",
  api_secret: "D-UN1E99zoDAkyXwQPIab66BLH0", // Ensure this is correct
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    fs.unlinkSync(localFilePath); // Remove file after upload
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); // Remove file if there's an error
    return null;
  }
};

module.exports = uploadOnCloudinary;
