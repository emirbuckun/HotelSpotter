import mongoose from "mongoose";

const LogSchema = new mongoose.Schema({
  logType: { type: String, required: true },
  description: { type: String, required: true },
  logDate: { type: Date, default: Date.now() },
  isSuccess: { type: Boolean, required: true },
});

export const LogModel = mongoose.model("logs", LogSchema);
