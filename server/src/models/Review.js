import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
  UserID: { type: mongoose.Schema.Types.ObjectId, required: true },
  HotelID: { type: mongoose.Schema.Types.ObjectId, required: true },
  Rating: { type: Number, required: true },
  Description: { type: String, required: true },
  CreateDate: { type: Date, default: Date.now() },
  UpdateDate: { type: Date, required: false },
});

export const ReviewModel = mongoose.model("Review", ReviewSchema);
