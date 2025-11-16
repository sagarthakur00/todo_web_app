import User from "../models/user.model";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/generateToken";

export const signup = async (req: any, res: any) => {
  const { name, email, password } = req.body;

  const hashed = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashed
  });

  res.json({
    token: generateToken(user._id.toString())
  });
};

export const login = async (req: any, res: any) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: "Invalid email" });

  const match = await bcrypt.compare(password, user.password!);
  if (!match) return res.status(400).json({ message: "Invalid password" });

  res.json({
    token: generateToken(user._id.toString())
  });
};
