const User = require("../model/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {sendOtp}=require('../utils/SendOtp')

const generateAccessTokens = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = await user.generateAccessToken();
    return accessToken;
  } catch (error) {
    throw new Error("Something went wrong while generating access token");
  }
};

exports.postData = async (req, res) => {
  try {
    const { fullname, email, mobile_no, gender, password } = req.body;

    // Check for empty fields
    if (
      [fullname, email, password, gender, mobile_no].some(
        (field) => !field?.trim()
      )
    ) {
      return res.json({
        success: false,
        message: "All fields are required",
      });
    }

    // Create and save user
    const createUser = await User.create({
      fullname,
      email,
      mobile_no,
      gender,
      password,
    });

    if (!createUser) {
      return res.json({
        success: false,
        message: "User registration failed",
      });
    }
    if (createUser.gender == "male") {
      createUser.avatar =
        "https://res.cloudinary.com/dtdlad1ud/image/upload/v1703938887/y18sqhaus4snghlhcscm.jpg";
      createUser.save({ validateBeforeSave: false });
    } else {
      createUser.avatar =
        "https://res.cloudinary.com/dtdlad1ud/image/upload/v1703939018/yl9frkeayfp9wftlfz8l.jpg";
      createUser.save({ validateBeforeSave: false });
    }

    return res.json({
      success: true,
      message: "Registration successful",
      data: createUser,
    });
  } catch (error) {
    if (error.code === 11000) {
      // Duplicate key error
      return res.json({
        success: false,
        message: "Mobile number must be unique",
      });
    } else {
      return res.json({
        success: false,
        message: "Registration failed",
        error: error.message,
      });
    }
  }
};

exports.getdata = async (req, res) => {
  try {
    const users = await User.find();
    return res.json({
      success: true,
      message: "Users fetched successfully",
      data: users,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: "An error occurred while fetching users",
      error: error.message,
    });
  }
};

// login api

exports.login = async (req, res) => {
  try {
    const { mobile_no, password } = req.body;

    // Find the user by mobile number
    const findmobile = await User.findOne({ mobile_no });

    if (findmobile) {
      // Check if the user is blocked
      if (findmobile.isblock) {
        return res.json({
          success: false,
          message: "User is restricted",
        });
      }
      const isValid = await bcrypt.compare(password, findmobile.password);
      if (isValid) {
        const accessToken = await generateAccessTokens(findmobile._id);

        const options = {
          httpOnly: true,
          secure: true,
        };

        return res.json({
          success: true,
          message: "User logged In Successfully",
          accessToken,
        });
      } else {
        return res.json({
          success: false,
          message: " incorrect password",
        });
      }
    } else {
      return res.json({
        success: false,
        message: "Mobile number does not exist",
      });
    }
  } catch (error) {
    return res.json({
      success: false,
      message: "An error occurred",
      error: error.message,
    });
  }
};

//   block unblock api
exports.userblock = async (req, res) => {
  try {
    const { id } = req.params;
    const { isblock } = req.body;

    const blocked = await User.updateOne({ _id: id }, { isblock });
    if (!blocked) {
      return res.json({
        success: false,
        message: "User not found",
        n,
      });
    }
    res.json({
      success: true,
      message: `User ${isblock ? "blocked" : "unblocked"} successfully`,
      data: blocked,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "An error occurred while updating the user",
      error: error.message,
    });
  }
};

//   update user
exports.updateUser = async (req, res) => {
  try {
    const userId = req.user?._id;
    const update = await User.updateOne({ _id: userId }, { $set: req.body });
    if (update) {
      return res.json({
        success: true,
        message: "update successfully",
      });
    } else {
      return res.json({
        success: false,
        message: "update failed",
      });
    }
  } catch (error) {
    res.send(error);
  }
};
//  delete api
exports.deleteUser = async (req, res) => {
  try {
    const id = req.param.id;
    const DeleteUser = await User.deleteOne(id);
    if (DeleteUser) {
      res.send("delete successfully");
    } else {
      res.send("not deleted");
    }
  } catch (error) {
    res.send(error);
  }
};
//  change password

// exports.changePassword = async (req, res) => {
//   try {
//     const id = req.params.id;
//     const password = req.body.password;
//     const changepassword = await User.updateOne({ _id: id, password });
//   } catch (err) {}
// };
// exports.getById = async (req, res) => {
//   try {
//     const id = req.params.id;
//     const user = await User.findOne({ _id: id });
//     if (!user) {
//       return res.status(404).json({
//         success: false,
//         message: "User not found",
//       });
//     } else {
//       return res.status(200).json({
//         success: true,
//         message: "User data found",
//         data: user,
//       });
//     }
//   } catch (error) {
//     return res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };
exports.getcurrentUser = async (req, res) => {
  try {
    return res.json({
      success: true,
      message: "userdata fetch successfully",
      data: req.user,
    });
  } catch (error) {
    return res.json({
      success: 0,
      message: error.message,
    });
  }
};


//  send otp 
exports.sendotp = async (req, res) => {
  try {
    const { mobile_no } = req.body;

    if (!mobile_no) {
      return res.json({
        success: false,
        message: "mobile number fild required",
      });
    }

    const user = await User.findOne({ mobile_no });

    if (!user) {
      return res.json({
        success: false,
        message: "mobile number is not register",
      });
    }
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    const msg = `Your event otp is ${otp}`;

    const data = await sendOtp(mobile_no, msg);

    // console.log(data)

    if (data.success == false) {
      return res.json({
        success: false,
        message: "something want to wrong please try agine after some time",
      });
    }

    user.otp = otp;
    await user.save({ validateBeforeSave: false });

    return res.json({
      success: true,
      message: "otp send successfully",
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

exports.verifyotp = async (req, res) => {
  try {
    const { mobile_no, otp } = req.body;

    if (!mobile_no && !otp) {
      return res.json({
        success: false,
        message: "All fields are required",
      });
    }

    const user = await User.findOne({ mobile_no });

    if (user.otp != otp) {
      return res.json({
        success: false,
        message: "otp is wrong",
      });
    }

    user.otp = null;
    await user.save({ validateBeforeSave: false });

    return res.json({
      success: true,
      message: "otp verify successfully",
      Id: user._id,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};