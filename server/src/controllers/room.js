import { RoomModel } from "../models/Room.js";

export const insertRoom = async (req, res, next) => {
  try {
    const newRoom = new RoomModel(req.body);
    const savedRoom = await newRoom.save();
    res.status(200).json(savedRoom);
  } catch (err) {
    next(err);
  }
};

export const updateRoom = async (req, res, next) => {
  try {
    const updatedRoom = await RoomModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedRoom);
  } catch (err) {
    next(err);
  }
};

export const deleteRoom = async (req, res, next) => {
  try {
    const deletedRoom = await RoomModel.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedRoom);
  } catch (err) {
    next(err);
  }
};

export const getRoom = async (req, res, next) => {
  try {
    const room = await RoomModel.findById(req.params.id);
    res.status(200).json(room);
  } catch (err) {
    next(err);
  }
};

export const getRooms = async (req, res, next) => {
  try {
    const { page, limit, sort } = req.query;

    const sortArgs = sort ? sort.split(",") : ["_id", "asc"];
    const sortField = sortArgs[0];
    const sortOrder = sortArgs[1] == "desc" ? -1 : 1;

    const query = await RoomModel.aggregate()
      .lookup({
        from: "hotels",
        localField: "hotelID",
        foreignField: "_id",
        as: "hotel",
      })
      .unwind("hotel")
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
