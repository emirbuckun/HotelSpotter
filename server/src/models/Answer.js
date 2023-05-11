import mongoose from "mongoose";

const AnswerSchema = new mongoose.Schema({
  UserID: { type: mongoose.Schema.Types.ObjectId, required: true },
  QuestionID: { type: mongoose.Schema.Types.ObjectId, required: true },
  Description: { type: String, required: true },
  CreateDate: { type: Date, required: true },
  UpdateDate: { type: Date, required: false },
});

export const AnswerModel = mongoose.model("answer", AnswerSchema);
