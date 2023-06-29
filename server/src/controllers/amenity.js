import { AmenityModel } from "../models/Amenity.js";
import { HotelModel } from "../models/Hotel.js";

export const insertAmenity = async (req, res, next) => {
  try {
    const newAmenity = new AmenityModel(req.body);
    const savedAmenity = await newAmenity.save();
    res.status(200).json(savedAmenity);
  } catch (err) {
    next(err);
  }
};

export const updateAmenity = async (req, res, next) => {
  try {
    const updatedAmenity = await AmenityModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedAmenity);
  } catch (err) {
    next(err);
  }
};

export const deleteAmenity = async (req, res, next) => {
  try {
    const deletedAmenity = await AmenityModel.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedAmenity);
  } catch (err) {
    next(err);
  }
};

export const getAmenity = async (req, res, next) => {
  try {
    const amenity = await AmenityModel.findById(req.params.id);
    res.status(200).json(amenity);
  } catch (err) {
    next(err);
  }
};

export const getAmenities = async (req, res, next) => {
  try {
    var amenityList = [];
    const PAGE_SIZE = 10;
    const { page } = req.query;
    const total = await AmenityModel.countDocuments({});
    const amenities = await AmenityModel.find({}, null, {
      skip: page * PAGE_SIZE,
      limit: PAGE_SIZE,
    }).select("-__v");
    for (var i = 0; i < amenities.length; i++) {
      var amenity = amenities[i].toObject();
      var hotelQuery = await HotelModel.findById(amenity.hotelID);
      amenity.hotelName =
        hotelQuery != null ? hotelQuery.toObject().name : "null";
      amenityList.push(amenity);
    }
    res
      .status(200)
      .json({ totalPages: Math.ceil(total / PAGE_SIZE), amenityList });
  } catch (err) {
    next(err);
  }
};
