import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
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
  reservationID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "reservations",
    required: true,
  },
  rating: { type: Number, required: true },
  description: { type: String, required: true },
  createDate: { type: Date, default: Date.now() },
  updateDate: { type: Date, required: false },
});

export const ReviewModel = mongoose.model("reviews", ReviewSchema);
