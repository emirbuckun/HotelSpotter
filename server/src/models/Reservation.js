import mongoose from "mongoose";

const ReservationSchema = new mongoose.Schema({
  ReservationID: { type: Number, required: true },
  HotelID: { type: Number, required: true },
  UserID: { type: Number, required: true },
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
