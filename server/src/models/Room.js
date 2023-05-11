import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema({
  HotelID: { type: mongoose.Schema.Types.ObjectId, required: true },
  RoomType: { type: mongoose.Schema.Types.ObjectId, required: true },
  Price: { type: Number, required: true },
  Count: { type: Number, required: true },
  PersonCapacity: { type: Number, required: true },
  TotalBed: { type: Number, required: true },
  TotalBath: { type: Number, required: true },
  CreateDate: { type: Date, default: Date.now() },
  UpdateDate: { type: Date, required: false },
  HasTV: { type: Boolean, required: true },
  HasInternet: { type: Boolean, required: true },
  HasAirCondition: { type: Boolean, required: true },
  HasHeating: { type: Boolean, required: true },
});

export const RoomModel = mongoose.model("room", RoomSchema);
