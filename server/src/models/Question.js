import mongoose from "mongoose";

const QuestionSchema = new mongoose.Schema({
  UserID: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
  HotelID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "hotel",
    required: true,
  },
  Description: { type: String, required: true },
  CreateDate: { type: Date, default: Date.now() },
  UpdateDate: { type: Date, required: false },
});

export const QuestionModel = mongoose.model("question", QuestionSchema);
