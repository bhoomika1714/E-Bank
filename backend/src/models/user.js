const mongoose = require('mongoose');

// Check if the model is already registered to prevent overwriting it
const User = mongoose.models.User || mongoose.model('User', new mongoose.Schema(
  {
    phoneNumber: { type: String, required: true, unique: true },
    pin: { type: String, required: true }, // Store PIN securely
    balance: { type: Number, default: 0 }, // User's balance
  },
  { timestamps: true }
));

module.exports = User;
