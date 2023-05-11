import mongoose from "mongoose";

const LocationSchema = new mongoose.Schema({
  HotelID: { type: mongoose.Schema.Types.ObjectId, required: true },
  Country: { type: String, required: true },
  City: { type: String, required: true },
  Street: { type: String, required: true },
  Number: { type: Number, required: true },
  Zip: { type: String, required: true },
  Latitude: { type: Number, required: true },
  Longitude: { type: Number, required: true },
});

export const LocationModel = mongoose.model("Location", LocationSchema);
