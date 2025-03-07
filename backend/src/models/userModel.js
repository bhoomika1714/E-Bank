const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: { type: String },
  phoneNumber: { type: String, required: true, unique: true },
  upiPin: { type: String },
  atmPin: { type: String },
  otp: { type: String },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
