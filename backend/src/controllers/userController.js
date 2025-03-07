const twilioService = require("../services/twilioService");
const userService = require("../services/userService");
const { checkBalanceService, getMiniStatementService } = require("../services/userService");

// ✅ Send OTP
exports.sendOtp = async (req, res) => {
  try {
    const { phoneNumber } = req.body;
    if (!phoneNumber) {
      return res.status(400).json({ error: "Phone number is required" });
    }

    console.log(`Sending OTP to ${phoneNumber}...`);
    const response = await twilioService.sendOtp(phoneNumber);

    console.log(`OTP sent successfully to ${phoneNumber}`);
    res.status(200).json({ message: `OTP sent to ${phoneNumber}`, details: response });
  } catch (error) {
    console.error("Error sending OTP:", error.message);
    res.status(500).json({ error: "Failed to send OTP", details: error.message });
  }
};

// ✅ Verify OTP
exports.verifyOtp = async (req, res) => {
  try {
    const { phoneNumber, otp } = req.body;
    if (!phoneNumber || !otp) {
      return res.status(400).json({ error: "Phone number and OTP are required" });
    }

    console.log(`Verifying OTP for ${phoneNumber}...`);
    const response = await twilioService.verifyOtp(phoneNumber, otp);

    console.log(`OTP verification successful for ${phoneNumber}`);
    res.status(200).json({ message: "OTP verification successful", details: response });
  } catch (error) {
    console.error("Error verifying OTP:", error.message);
    res.status(400).json({ error: "OTP verification failed", details: error.message });
  }
};

// ✅ Set UPI PIN
exports.setUpiPin = async (req, res) => {
  try {
    const { phoneNumber, userName, atmPin, upiPin } = req.body;
    if (!phoneNumber || !userName || !atmPin || !upiPin) {
      return res.status(400).json({ error: "All fields (phoneNumber, userName, atmPin, upiPin) are required" });
    }

    console.log(`Setting UPI PIN for ${phoneNumber}...`);
    const response = await userService.createUpiPin(phoneNumber, userName, atmPin, upiPin);

    console.log(`UPI PIN set successfully for ${phoneNumber}`);
    res.status(200).json({ message: "UPI PIN set successfully", details: response });
  } catch (error) {
    console.error("Error setting UPI PIN:", error.message);
    res.status(400).json({ error: "Failed to set UPI PIN", details: error.message });
  }
};

// ✅ Check Balance
exports.checkBalance = async (req, res) => {
  try {
    const { phoneNumber, pin } = req.body;
    if (!phoneNumber || !pin) {
      return res.status(400).json({ error: "Phone number and PIN are required" });
    }

    console.log(`Checking balance for ${phoneNumber}...`);
    const balance = await checkBalanceService(phoneNumber, pin);

    console.log(`Balance for ${phoneNumber}: ${balance}`);
    res.status(200).json({ balance });
  } catch (error) {
    console.error("Error checking balance:", error.message);
    res.status(400).json({ error: "Failed to fetch balance", details: error.message });
  }
};

// ✅ Get Mini Statement
exports.getMiniStatement = async (req, res) => {
  try {
    const { phoneNumber, pin } = req.body;
    if (!phoneNumber || !pin) {
      return res.status(400).json({ error: "Phone number and PIN are required" });
    }

    console.log(`Fetching mini statement for ${phoneNumber}...`);
    const transactions = await getMiniStatementService(phoneNumber, pin);

    console.log(`Mini statement fetched successfully for ${phoneNumber}`);
    res.status(200).json({ transactions });
  } catch (error) {
    console.error("Error fetching mini statement:", error.message);
    res.status(400).json({ error: "Failed to fetch mini statement", details: error.message });
  }
};


// const twilioService = require("../services/twilioService");
// const userService = require("../services/userService");
// const { checkBalanceService, getMiniStatementService } = require('../services/userService');

// // Endpoint to send OTP
// exports.sendOtp = async (req, res) => {
//   const { phoneNumber } = req.body;
//   try {
//     // Use twilioService to generate OTP
//     const response = await twilioService.sendOtp(phoneNumber);
//     res.status(200).send(response);
//   } catch (error) {
//     res.status(500).send({ error: error.message });
//   }
// };

// // Endpoint to verify OTP
// exports.verifyOtp = async (req, res) => {
//   const { phoneNumber, otp } = req.body;
//   try {
//     // Use twilioService to validate OTP
//     const response = await twilioService.verifyOtp(phoneNumber, otp);
//     res.status(200).send(response);
//   } catch (error) {
//     res.status(400).send({ error: error.message });
//   }
// };

// // Endpoint to set UPI PIN
// exports.setUpiPin = async (req, res) => {
//   const { phoneNumber, userName, atmPin, upiPin } = req.body;
//   try {
//     // Use userService to create UPI PIN
//     const response = await userService.createUpiPin(phoneNumber, userName, atmPin, upiPin);
//     res.status(200).send(response);
//   } catch (error) {
//     res.status(400).send({ error: error.message });
//   }
// };

// // Controller to handle checking balance
// exports.checkBalance = async (req, res) => {
//   const { phoneNumber, pin } = req.body;

//   try {
//     const balance = await checkBalanceService(phoneNumber, pin);
//     res.status(200).json({ balance });
//   } catch (error) {
//     console.error(error);
//     res.status(400).json({ message: error.message });
//   }
// };

// // Controller to handle mini statement
// exports.getMiniStatement = async (req, res) => {
//   const { phoneNumber, pin } = req.body;

//   try {
//     const transactions = await getMiniStatementService(phoneNumber, pin);
//     res.status(200).json({ transactions });
//   } catch (error) {
//     console.error(error);
//     res.status(400).json({ message: error.message });
//   }
// };
