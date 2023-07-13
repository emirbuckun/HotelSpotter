import { LocationModel } from "../models/Location.js";

export const insertLocation = async (req, res, next) => {
  try {
    const newLocation = new LocationModel(req.body);
    const savedLocation = await newLocation.save();
    res.status(200).json(savedLocation);
  } catch (err) {
    next(err);
  }
};

export const updateLocation = async (req, res, next) => {
  try {
    const updatedLocation = await LocationModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedLocation);
  } catch (err) {
    next(err);
  }
};

export const deleteLocation = async (req, res, next) => {
  try {
    const deletedLocation = await LocationModel.findByIdAndDelete(
      req.params.id
    );
    res.status(200).json(deletedLocation);
  } catch (err) {
    next(err);
  }
};

export const getLocation = async (req, res, next) => {
  try {
    const location = await LocationModel.findById(req.params.id);
    res.status(200).json(location);
  } catch (err) {
    next(err);
  }
};

export const getLocationByHotelID = async (req, res, next) => {
  try {
    const location = await LocationModel.find({ hotelID: req.params.id });
    res.status(200).json(location);
  } catch (err) {
    next(err);
  }
};

export const getLocations = async (req, res, next) => {
  try {
    const { page, limit, sort } = req.query;

    const sortArgs = sort ? sort.split(",") : ["_id", "asc"];
    const sortField = sortArgs[0];
    const sortOrder = sortArgs[1] == "desc" ? -1 : 1;

    const query = await LocationModel.aggregate()
      .lookup({
        from: "hotels",
        localField: "hotelID",
        foreignField: "_id",
        as: "hotel",
      })
      .unwind("hotel")
      .project({
        hotelID: "$hotelID",
        hotelName: "$hotel.name",
        country: "$country",
        city: "$city",
        street: "$street",
        number: "$number",
        zip: "$zip",
        latitude: "$latitude",
        longitude: "$longitude",
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
