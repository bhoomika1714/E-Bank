const twilio = require("twilio");
const TempOtp = require("../models/tempOtpModel");
const dotenv = require("dotenv");
dotenv.config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const fromNumber = process.env.TWILIO_FROM_NUMBER;

const client = twilio(accountSid, authToken);

exports.sendOtp = async (phoneNumber) => {
  try {
    const otp = Math.floor(100000 + Math.random() * 900000); // Generate 6-digit OTP
    const messageContent = `Your OTP is ${otp}. Please enter this code to complete your authentication.`;

    await client.messages.create({
      body: messageContent,
      from: fromNumber,
      to: phoneNumber,
    });

    const expiresAt = Date.now() + 600000; // OTP valid for 10 minutes

    // Save OTP to the database
    await TempOtp.findOneAndUpdate(
      { phoneNumber },
      { phoneNumber, otp, expiresAt },
      { upsert: true }
    );

    console.log(`OTP sent to ${phoneNumber}: ${otp}`);
    return { message: "OTP sent successfully." };
  } catch (error) {
    console.error("Error sending OTP:", error.message);
    throw new Error("Failed to send OTP.");
  }
};

exports.verifyOtp = async (phoneNumber, otp) => {
  try {
    const storedOtp = await TempOtp.findOne({ phoneNumber });

    if (!storedOtp) {
      throw new Error("Invalid OTP or phone number.");
    }

    if (storedOtp.otp === otp && storedOtp.expiresAt > Date.now()) {
      await TempOtp.deleteOne({ phoneNumber });
      return { message: "OTP verified successfully." };
    } else {
      throw new Error("Invalid or expired OTP.");
    }
  } catch (error) {
    console.error("Error verifying OTP:", error.message);
    throw error;
  }
};
