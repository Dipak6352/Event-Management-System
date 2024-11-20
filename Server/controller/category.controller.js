// controller/category.controller.js
const categorymodel = require("../model/category.model");
const Category = categorymodel.category;
const uploadOnCloudinary = require("../utils/cloudinary");

exports.categorypost = async (req, res) => {
  try {
    const { category_name } = req.body;
    const categoryImgLocalPath = req.file?.path;

    if ([category_name].some((field) => field?.trim() === "")) {
      return res.json({
        success: false,
        message: "All fields are required",
      });
    }

    if (!categoryImgLocalPath) {
      return res.json({
        success: false,
        message: "Image file is missing",
      });
      
    }

    const catImg = await uploadOnCloudinary(categoryImgLocalPath);
    if (!catImg) {
      return res.json({
        success: false,
        message: "Error while uploading an image",
      });
    }

    const category = await Category.create({ category_name, URL: catImg.secure_url });

    if (!category) {
      return res.json({
        success: false,
        message: "Category not posted",
      });
    } else {
      return res.json({
        success: true,
        message: "Category successfully posted",
        data: category,
      });
    }
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};


exports.getcategory = async (req, res) => {
  try {
    const getcategoriy = await Category.find();
    if (!getcategoriy) {
      return res.json({
        success: false,
        message: "not get",
      });
    } else {
      return res.json({
        success: true,
        message: "category get successfully",
        data: getcategoriy,
      });
    }
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

exports.deletecategory = async (req, res) => {
  try {
    const id = req.params._id;
    const deletee = await Category.deleteOne({_id:id});
    if (deletee) {
      return res.json({
        success: false,
        message: "not delete",
      });
    } else {
      return res.json({
        success: true,
        message: " category delete successfully",
      });
    }
  } catch (error) {
    return res.json({
      success: false,
      message: "error in delete",
    });
  }
};
