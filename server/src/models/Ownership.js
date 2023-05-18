import mongoose from "mongoose";

const OwnershipSchema = new mongoose.Schema({
  userID: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
  hotelID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "hotels",
    required: true,
  },
});

export const OwnershipModel = mongoose.model("ownerships", OwnershipSchema);
