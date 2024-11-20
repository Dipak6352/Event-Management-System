const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    mobile_no: {
      type: String,
      required: true,
      unique: [true, "mobile number must be unique"],
    },
    gender: {
      type: String,
      enum: ["male", "female"],
      required: true,
    },
    isblock: {
      type: Boolean,
      default: false,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default: null,
    },
    otp: {
      type: Number,
      default: null
  }
  },
  { timestamps: true }
);

userSchema.methods.generateAccessToken = async function () {
  return jwt.sign(
    {
      _id: this._id,
    },
    "dipak@123",
    {
      expiresIn: "360d",
    }
  );
};

userSchema.pre("save", async function (next) {
  try {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
  } catch (error) {
    next(error);
  }
});

const User = mongoose.model("User", userSchema);
module.exports = User;
