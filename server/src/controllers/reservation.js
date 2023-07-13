import { ReservationModel } from "../models/Reservation.js";
import { HotelModel } from "../models/Hotel.js";
import { PictureModel } from "../models/Picture.js";

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

export const getReservationsByUserID = async (req, res, next) => {
  try {
    var reservationList = [];
    const reservations = await ReservationModel.find({
      userID: req.params.id,
    });
    for (var i = 0; i < reservations.length; i++) {
      var reservation = reservations[i].toObject();
      reservation.hotelName = (
        await HotelModel.findById(reservation.hotelID)
      ).name;

      reservation.hotelPhoto = (
        await PictureModel.findOne({ hotelID: reservation.hotelID })
      ).picture;

      reservationList.push(reservation);
    }
    res.status(200).json(reservationList);
  } catch (err) {
    next(err);
  }
};

export const getReservations = async (req, res, next) => {
  try {
    const { page, limit, sort } = req.query;

    const sortArgs = sort ? sort.split(",") : ["_id", "asc"];
    const sortField = sortArgs[0];
    const sortOrder = sortArgs[1] == "desc" ? -1 : 1;

    const query = await ReservationModel.aggregate()
      .lookup({
        from: "users",
        localField: "userID",
        foreignField: "_id",
        as: "user",
      })
      .lookup({
        from: "hotels",
        localField: "hotelID",
        foreignField: "_id",
        as: "hotel",
      })
      .unwind("user")
      .unwind("hotel")
      .project({
        userID: "$userID",
        hotelID: "$hotelID",
        userMail: "$user.mail",
        userName: { $concat: ["$user.firstName", " ", "$user.lastName"] },
        hotelName: "$hotel.name",
        checkIn: "$checkIn",
        checkOut: "$checkOut",
        guestCount: "$guestCount",
        roomType: "$roomType",
        createDate: "$createDate",
      })
      .sort({ [sortField]: parseInt(sortOrder) })
      .facet({
        count: [{ $count: "total" }],
        paginated: [{ $skip: page * limit }, { $limit: parseInt(limit) }],
      });

    const result = query[0];
    const list = result.paginated;
    const total = result.count[0] != null ? result.count[0].total : 0;

    res.status(200).json({ total, list });
  } catch (err) {
    next(err);
  }
};
