const express = require("express");
const router = express.Router();
const otpController = require("../controllers/otpController");
const userController = require("../controllers/userController");
const { checkBalance, getMiniStatement } = require('../controllers/userController');
// Route to send OTP
router.post("/sendOtp", otpController.sendOtp);

// Route to verify OTP
router.post("/verifyOtp", otpController.verifyOtp);

// Route to set UPI PIN
router.post("/setUpiPin", userController.setUpiPin);

router.post('/checkBalance', userController.checkBalance);
router.post('/miniStatement', userController.getMiniStatement);

module.exports = router;
