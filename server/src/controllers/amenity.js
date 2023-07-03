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
    const { page, limit, search, sort } = req.query;

    const sortArgs = sort ? sort.split(",") : ["_id", "asc"];
    const sortField = sortArgs[0];
    const sortOrder = sortArgs[1] == "desc" ? -1 : 1;

    const searchArgs = search ? search.split(",") : ["", ""];
    const searchHotel = searchArgs[0];
    const searchAmenity = searchArgs[1];

    const query = await AmenityModel.aggregate()
      .match({
        amenity: new RegExp(searchAmenity, "i"),
      })
      .lookup({
        from: "hotels",
        localField: "hotelID",
        foreignField: "_id",
        as: "hotel",
      })
      .match({
        "hotel.name": new RegExp(searchHotel, "i"),
      })
      .unwind("hotel")
      .project({
        hotelID: "$hotelID",
        hotelName: "$hotel.name",
        hotelStar: "$hotel.star",
        hotelRating: "$hotel.rating",
        amenity: "$amenity",
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
