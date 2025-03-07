const User = require("../models/userModel");
const User1 = require('../models/user');
const Transaction = require('../models/Transaction');

// Create UPI PIN
exports.createUpiPin = async (phoneNumber, userName, atmPin, upiPin) => {
  if (atmPin.length === 4 && upiPin.length === 4) {
    await User.findOneAndUpdate(
      { phoneNumber },
      { $set: { userName, atmPin, upiPin } }
    );
    return "UPI PIN set successfully.";
  } else {
    throw new Error("Invalid ATM or UPI PIN.");
  }
};

// Service to check the balance
exports.checkBalanceService = async (phoneNumber, pin) => {
  try {
    const user = await User.findOne({ phoneNumber });

    if (!user) {
      throw new Error('User not found');
    }

    if (user.upiPin !== pin) {
      throw new Error('Incorrect UPI PIN');
    }

    return user.balance;
  } catch (error) {
    throw error;
  }
};

// Service to get the mini statement (last 5 transactions)
exports.getMiniStatementService = async (phoneNumber, pin) => {
  try {
    const user = await User.findOne({ phoneNumber });

    if (!user) {
      throw new Error('User not found');
    }

    if (user.upiPin !== pin) {
      throw new Error('Incorrect UPI PIN');
    }

    const transactions = await Transaction.find({ userId: user._id })
      .sort({ date: -1 })
      .limit(5);

    return transactions;
  } catch (error) {
    throw error;
  }
};
