import mongoose from "mongoose";

const OwnershipSchema = new mongoose.Schema({
  UserID: { type: mongoose.Schema.Types.ObjectId, required: true },
  HotelID: { type: mongoose.Schema.Types.ObjectId, required: true },
});

export const OwnershipModel = mongoose.model("ownership", OwnershipSchema);
