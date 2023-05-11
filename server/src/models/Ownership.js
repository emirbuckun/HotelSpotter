import mongoose from "mongoose";

const OwnershipSchema = new mongoose.Schema({
  UserID: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
  HotelID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "hotel",
    required: true,
  },
});

export const OwnershipModel = mongoose.model("ownership", OwnershipSchema);
