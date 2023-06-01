import mongoose from "mongoose";

const HotelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  star: { type: Number, required: true },
  rating: { type: Number, required: false },
});

export const HotelModel = mongoose.model("hotels", HotelSchema);
