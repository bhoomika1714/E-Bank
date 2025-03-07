// const twilioService = require("../services/twilioService");

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

const twilioService = require("../services/twilioService");

// Endpoint to send OTP
exports.sendOtp = async (req, res) => {
  try {
    const { phoneNumber } = req.body;
    if (!phoneNumber) {
      return res.status(400).json({ error: "Phone number is required" });
    }

    console.log(`Sending OTP to ${phoneNumber}...`);

    // Use twilioService to send OTP
    const response = await twilioService.sendOtp(phoneNumber);

    console.log(`OTP successfully sent to ${phoneNumber}`);
    res.status(200).json({
      message: `OTP sent to ${phoneNumber}`,
      status: "success",
      details: response, // Optional: To debug API response
    });
  } catch (error) {
    console.error("Error sending OTP:", error.message);
    res.status(500).json({ error: "Failed to send OTP", details: error.message });
  }
};

// Endpoint to verify OTP
exports.verifyOtp = async (req, res) => {
  try {
    const { phoneNumber, otp } = req.body;
    if (!phoneNumber || !otp) {
      return res.status(400).json({ error: "Phone number and OTP are required" });
    }

    console.log(`Verifying OTP for ${phoneNumber}: ${otp}...`);

    // Use twilioService to validate OTP
    const response = await twilioService.verifyOtp(phoneNumber, otp);

    console.log(`OTP verification successful for ${phoneNumber}`);
    res.status(200).json({
      message: `OTP verification successful for ${phoneNumber}`,
      status: "success",
      details: response, // Optional: Debug API response
    });
  } catch (error) {
    console.error("Error verifying OTP:", error.message);
    res.status(400).json({ error: "OTP verification failed", details: error.message });
  }
};
