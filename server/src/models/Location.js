import mongoose from "mongoose";

const LocationSchema = new mongoose.Schema({
  hotelID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "hotels",
    required: true,
  },
  country: { type: String, required: true },
  city: { type: String, required: true },
  street: { type: String, required: true },
  number: { type: Number, required: true },
  zip: { type: String, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
});

export const LocationModel = mongoose.model("locations", LocationSchema);
