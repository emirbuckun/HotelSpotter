import mongoose from "mongoose";

const AmenitySchema = new mongoose.Schema({
  HotelID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "hotel",
    required: true,
  },
  Amenity: { type: String, required: true },
});

export const AmenityModel = mongoose.model("amenity", AmenitySchema);
