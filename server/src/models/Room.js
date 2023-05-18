import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema({
  hotelID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "hotels",
    required: true,
  },
  roomType: { type: mongoose.Schema.Types.ObjectId, required: true },
  price: { type: Number, required: true },
  count: { type: Number, required: true },
  personCapacity: { type: Number, required: true },
  totalBed: { type: Number, required: true },
  totalBath: { type: Number, required: true },
  createDate: { type: Date, default: Date.now() },
  updateDate: { type: Date, required: false },
  hasTV: { type: Boolean, required: true },
  hasInternet: { type: Boolean, required: true },
  hasAirCondition: { type: Boolean, required: true },
  hasHeating: { type: Boolean, required: true },
});

export const RoomModel = mongoose.model("rooms", RoomSchema);
