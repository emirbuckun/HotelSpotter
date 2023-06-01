import mongoose from "mongoose";

const PictureSchema = new mongoose.Schema({
  hotelID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "hotels",
    required: true,
  },
  picture: [{ type: String, required: true }],
});

export const PictureModel = mongoose.model("pictures", PictureSchema);
