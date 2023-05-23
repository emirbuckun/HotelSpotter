import { ReservationModel } from "../models/Reservation.js";

export const insertReservation = async (req, res, next) => {
  try {
    const newReservation = new ReservationModel(req.body);
    const savedReservation = await newReservation.save();
    res.status(200).json(savedReservation);
  } catch (err) {
    next(err);
  }
};

export const updateReservation = async (req, res, next) => {
  try {
    const updatedReservation = await ReservationModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedReservation);
  } catch (err) {
    next(err);
  }
};

export const deleteReservation = async (req, res, next) => {
  try {
    const deletedReservation = await ReservationModel.findByIdAndDelete(
      req.params.id
    );
    res.status(200).json(deletedReservation);
  } catch (err) {
    next(err);
  }
};

export const getReservation = async (req, res, next) => {
  try {
    const reservation = await ReservationModel.findById(req.params.id);
    res.status(200).json(reservation);
  } catch (err) {
    next(err);
  }
};

export const getReservations = async (req, res, next) => {
  try {
    const reservations = await ReservationModel.find();
    res.status(200).json(reservations);
  } catch (err) {
    next(err);
  }
};
