import mongoose from "mongoose";

const AnswerSchema = new mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  questionID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "questions",
    required: true,
  },
  description: { type: String, required: true },
  createDate: { type: Date, default: Date.now() },
  updateDate: { type: Date, required: false },
});

export const AnswerModel = mongoose.model("answers", AnswerSchema);
