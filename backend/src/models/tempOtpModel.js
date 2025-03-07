const mongoose = require("mongoose");

const tempOtpSchema = new mongoose.Schema({
  phoneNumber: { type: String, required: true },
  otp: { type: String, required: true },
  expiresAt: { type: Number, required: true }, // Expiry timestamp
});

const TempOtp = mongoose.model("TempOtp", tempOtpSchema);

module.exports = TempOtp;
