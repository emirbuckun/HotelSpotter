import mongoose from "mongoose";

const AmenitySchema = new mongoose.Schema({
  hotelID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "hotels",
    required: true,
  },
  amenity: [{ type: String, required: true }],
});

export const AmenityModel = mongoose.model("amenities", AmenitySchema);
