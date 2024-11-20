const User = require("../model/user.model");
const jwt = require("jsonwebtoken");

const varifyJWT = async (req, res, next) => {
  try {
    const token = req.cookies?.accessToken || req.header("Authorization");

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized token",
      });
    }

    const decodedtoken = jwt.verify(token, "dipak@123");
    const user = await User.findById(decodedtoken?._id)

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid Access Token",
      });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error?.message || "Something went wrong",
    });
  }
};

module.exports = varifyJWT;
