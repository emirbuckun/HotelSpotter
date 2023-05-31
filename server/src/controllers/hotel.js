import { HotelModel } from "../models/Hotel.js";
import { AmenityModel } from "../models/Amenity.js";
import { LocationModel } from "../models/Location.js";
import { PictureModel } from "../models/Picture.js";

export const insertHotel = async (req, res, next) => {
  try {
    const newHotel = new HotelModel(req.body);
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    next(err);
  }
};

export const updateHotel = async (req, res, next) => {
  try {
    const updatedHotel = await HotelModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (err) {
    next(err);
  }
};

export const deleteHotel = async (req, res, next) => {
  try {
    const deletedHotel = await HotelModel.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedHotel);
  } catch (err) {
    next(err);
  }
};

export const getHotel = async (req, res, next) => {
  try {
    const hotel = await HotelModel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (err) {
    next(err);
  }
};

export const getHotelList = async (req, res, next) => {
  try {
    var hotelList = [];
    const hotels = await HotelModel.find();

    for (var i = 0; i < hotels.length; i++) {
      var hotel = hotels[i].toObject();
      hotel.amenities = await AmenityModel.findOne({
        hotelID: hotel._id,
      }).select("amenity -_id");
      hotel.location = await LocationModel.findOne({
        hotelID: hotel._id,
      }).select("country city -_id");
      hotel.pictures = await PictureModel.findOne({
        hotelID: hotel._id,
      }).select("picture -_id");
      hotelList.push(hotel);
    }

    res.status(200).json(hotelList);
  } catch (err) {
    next(err);
  }
};

export const getHotels = async (req, res, next) => {
  try {
    const hotels = await HotelModel.find();
    res.status(200).json(hotels);
  } catch (err) {
    next(err);
  }
};
