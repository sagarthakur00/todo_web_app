import mongoose from "mongoose";

const logSchema = new mongoose.Schema({
  message: String,
  stack: String,
  timestamp: { type: Date, default: Date.now }
});

export default mongoose.model("Log", logSchema);
