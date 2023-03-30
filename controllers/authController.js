const userModel = require("../models/userModel");

// user register controller
module.exports.registerController = async (req, res, next) => {
  const { name, email, password } = req.body;
  // validation
  if (!name) {
    next("Name is required");
  }
  if (!email) {
    next("Email is required");
  }
  if (!password) {
    next("Password is required & should be greater than 6 character");
  }
  // check existing user
  const existingUser = await userModel.findOne({ email });
  if (existingUser) {
    next("Email Already Registered please login");
  }
  const user = await userModel.create({ name, email, password });
  res.status(201).send({
    success: true,
    message: "User Created Successfully",
    user,
  });
};
