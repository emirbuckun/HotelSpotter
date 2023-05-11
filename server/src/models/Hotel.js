import mongoose from "mongoose";

const HotelSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  Star: { type: String, required: true },
  Rating: { type: Number, required: false },
});

export const HotelModel = mongoose.model("hotel", HotelSchema);
