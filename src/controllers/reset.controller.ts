import User from "../models/user.model";
import crypto from "crypto";
import bcrypt from "bcryptjs";

// Step 1: Generate token
export const forgotPassword = async (req: any, res: any) => {
  const { email } = req.body;

  const user = await User.findOne({ email });
  if (!user)
    return res.status(400).json({ message: "Email not found" });

  const token = crypto.randomBytes(20).toString("hex");

  user.resetToken = token;
  user.resetTokenExpire = new Date(Date.now() + 10 * 60 * 1000); // token for 10 minutes
  await user.save();

  res.json({
    message: "Password reset token generated",
    token
  });
};

// Step 2: Reset password using token
export const resetPassword = async (req: any, res: any) => {
  const { token, newPassword } = req.body;

  const user = await User.findOne({
    resetToken: token,
    resetTokenExpire: { $gt: Date.now() }
  });

  if (!user)
    return res.status(400).json({ message: "Invalid or expired token" });

  user.password = await bcrypt.hash(newPassword, 10);
  user.resetToken = "";
  user.resetTokenExpire = undefined;

  await user.save();

  res.json({
    message: "Password reset successful"
  });
};
