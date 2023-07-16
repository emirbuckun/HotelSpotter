import { HotelModel } from "../models/Hotel.js";
import { AmenityModel } from "../models/Amenity.js";
import { LocationModel } from "../models/Location.js";
import { RoomModel } from "../models/Room.js";
import { ReviewModel } from "../models/Review.js";
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

export const getHotelDetails = async (req, res, next) => {
  try {
    const hotelQuery = await HotelModel.findById(req.params.id).select("-__v");
    var hotel = hotelQuery.toObject();

    hotel.amenities = await AmenityModel.findOne({
      hotelID: hotel._id,
    }).select("-_id amenity");

    hotel.location = await LocationModel.findOne({
      hotelID: hotel._id,
    }).select("-_id -hotelID -__v");

    hotel.pictures = await PictureModel.findOne({
      hotelID: hotel._id,
    }).select("-_id picture");

    hotel.room = await RoomModel.find({
      hotelID: hotel._id,
    }).select("-_id -hotelID -__v");

    hotel.review = await ReviewModel.find({
      hotelID: hotel._id,
    }).select("-_id -hotelID -__v");

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

export const filterHotels = async (req, res, next) => {
  try {
    var hotelList = [];
    const filter = req.body;

    // Amenity filter preparation
    filter.amenities = [];
    if (filter.poolAmenity == true)
      filter.amenities.push("Private Outdoor Pool");
    if (filter.internetAmenity == true) filter.amenities.push("Wifi");
    if (filter.gymAmenity == true) filter.amenities.push("Gym");
    if (filter.parkAmenity == true) filter.amenities.push("Free Parking");
    if (filter.airAmenity == true) filter.amenities.push("Air Conditioning");

    // Hotel name and star filter
    var hotels = await HotelModel.find({
      name: { $regex: filter.searchText, $options: "i" },
      star: { $gte: filter.star },
    });

    // Get amenities, location and pictures for each hotel
    for (var i = 0; i < hotels.length; i++) {
      var hotel = hotels[i].toObject();

      // Get amenities
      if (filter.amenities.length > 0) {
        hotel.amenities = await AmenityModel.findOne({
          hotelID: hotel._id,
          amenity: { $in: filter.amenities },
        }).select("amenity -_id");
      } else {
        hotel.amenities = await AmenityModel.findOne({
          hotelID: hotel._id,
        }).select("amenity -_id");
      }

      // If no amenity exist, don't push the hotel to the result array
      if (hotel.amenities == null) continue;

      // Get location
      hotel.location = await LocationModel.findOne({
        hotelID: hotel._id,
      }).select("country city -_id");

      // Get pictures
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
    const { page, limit, sort } = req.query;

    const sortArgs = sort ? sort.split(",") : ["_id", "asc"];
    const sortField = sortArgs[0];
    const sortOrder = sortArgs[1] == "desc" ? -1 : 1;

    const query = await HotelModel.aggregate()
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

export const getAllHotels = async (req, res, next) => {
  try {
    const hotels = await HotelModel.find();
    res.status(200).json(hotels);
  } catch (err) {
    next(err);
  }
};
