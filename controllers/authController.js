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
    next("Already Registered! please login");
  }
  const user = await userModel.create({ name, email, password });
  // token
  const token = user.createJWT();
  res.status(201).send({
    success: true,
    message: "Registration Successful!",
    user: {
      name: user.name,
      lastName: user.lastName,
      email: user.email,
      location: user.location,
    },
    token,
  });
};

// user login controller
// module.exports.loginController = async (req, res, next) => {
//   const { email, password } = req.body;
//   // validation
//   if (!email || !password) {
//     next("Please Provide all fields");
//   }

//   // find user by email
//   const user = await userModel.findOne({ email }).select("+password");
//   if (!user) {
//     next("Invalid Username or password");
//   }
//   // compare password
//   const isMatch = await user.comparePassword(password);
//   if (!isMatch) {
//     next("Invalid Username or password");
//   }
//   user.password = undefined;
//   const token = user.createJWT();
//   res.status(200).json({
//     success: true,
//     message: "Login Successful! Welcome",
//     user,
//     token,
//   });
// };

module.exports.loginController = async (req, res, next) => {
  const { email, password } = req.body;

  // validation
  if (!email || !password) {
    return next("Please provide all fields");
  }

  try {
    // find user by email
    const user = await userModel.findOne({ email }).select("+password");

    if (!user) {
      return next("Invalid username or password");
    }

    // compare password
    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      return next("Invalid username or password");
    }

    // remove password from user object
    user.password = undefined;

    // create JWT token
    const token = user.createJWT();

    // send response to client
    res.status(200).json({
      success: true,
      message: "Login successful! Welcome",
      user,
      token,
    });
  } catch (error) {
    return next(error);
  }
};
