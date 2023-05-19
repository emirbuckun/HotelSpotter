import mongoose from "mongoose";

const QuestionSchema = new mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  hotelID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "hotels",
    required: true,
  },
  description: { type: String, required: true },
  createDate: { type: Date, default: Date.now() },
  updateDate: { type: Date, required: false },
});

export const QuestionModel = mongoose.model("questions", QuestionSchema);
