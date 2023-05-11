import mongoose from "mongoose";

const PictureSchema = new mongoose.Schema({
  HotelID: { type: mongoose.Schema.Types.ObjectId, required: true },
  Picture: { type: String, required: true },
});

export const PictureModel = mongoose.model("picture", PictureSchema);
