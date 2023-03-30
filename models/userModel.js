const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

// schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is Required"],
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: [true, "Email is Required"],
      unique: true,
      validate: validator.isEmail,
    },
    password: {
      type: String,
      required: [true, "Password is Required"],
      minLength: [6, "Password length should be greater than 6 character"],
    },
    location: {
      type: String,
      default: "India",
    },
  },
  { timestamps: true }
);
// middlewares
userSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});
module.exports = mongoose.model("User", userSchema);
