import mongoose from "mongoose";

const LogSchema = new mongoose.Schema({
  LogType: { type: String, required: true },
  Description: { type: String, required: true },
  LogDate: { type: Date, required: true },
  IsSuccess: { type: Boolean, required: true },
});

export const LogModel = mongoose.model("log", LogSchema);
