import mongoose from "mongoose";

const ReservationSchema = new mongoose.Schema({
  hotelID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "hotels",
    required: true,
  },
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  checkIn: { type: Date, required: true },
  checkOut: { type: Date, required: true },
  guestCount: { type: Number, required: true },
  roomType: { type: String, required: true },
  createDate: { type: Date, default: Date.now() },
  updateDate: { type: Date, required: false },
});

export const ReservationModel = mongoose.model(
  "reservations",
  ReservationSchema
);
