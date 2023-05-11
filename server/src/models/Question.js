import mongoose from "mongoose";

const QuestionSchema = new mongoose.Schema({
  UserID: { type: mongoose.Schema.Types.ObjectId, required: true },
  HotelID: { type: mongoose.Schema.Types.ObjectId, required: true },
  Description: { type: String, required: true },
  CreateDate: { type: Date, required: true },
  UpdateDate: { type: Date, required: false },
});

export const QuestionModel = mongoose.model("question", QuestionSchema);
