const express = require("express");
const {
  registerController,
  loginController,
} = require("../controllers/authController");

// router object
const router = express.Router();

// routes

// REGISTER || POST
router.post("/register", registerController);

// LOGIN || POST
router.post("/login", loginController);

// export
module.exports = router;
