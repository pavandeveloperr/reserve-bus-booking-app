const express = require("express");
const { updateUserController } = require("../controllers/userController");
const userAuth = require("../middlewares/authMiddleware");

// router object
const router = express.Router();

// routes

// GET USERS || GET

// UPDATE USER || PUT
router.put("/update-user", userAuth, updateUserController);

module.exports = router;
