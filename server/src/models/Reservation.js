import mongoose from "mongoose";

const ReservationSchema = new mongoose.Schema({
  ReservationID: { type: mongoose.Schema.Types.ObjectId, required: true },
  HotelID: { type: mongoose.Schema.Types.ObjectId, required: true },
  UserID: { type: mongoose.Schema.Types.ObjectId, required: true },
  CheckIn: { type: Date, required: true },
  CheckOut: { type: Date, required: true },
  GuestCount: { type: Number, required: true },
  RoomType: { type: String, required: true },
  CreateDate: { type: Date, default: Date.now() },
  UpdateDate: { type: Date, required: false },
});

export const ReservationModel = mongoose.model(
  "Reservation",
  ReservationSchema
);
