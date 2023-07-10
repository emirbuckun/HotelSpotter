import { PictureModel } from "../models/Picture.js";

export const insertPicture = async (req, res, next) => {
  try {
    const newPicture = new PictureModel(req.body);
    const savedPicture = await newPicture.save();
    res.status(200).json(savedPicture);
  } catch (err) {
    next(err);
  }
};

export const updatePicture = async (req, res, next) => {
  try {
    const updatedPicture = await PictureModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedPicture);
  } catch (err) {
    next(err);
  }
};

export const deletePicture = async (req, res, next) => {
  try {
    const deletedPicture = await PictureModel.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedPicture);
  } catch (err) {
    next(err);
  }
};

export const getPicture = async (req, res, next) => {
  try {
    const picture = await PictureModel.findById(req.params.id);
    res.status(200).json(picture);
  } catch (err) {
    next(err);
  }
};

export const getPictures = async (req, res, next) => {
  try {
    const { page, limit, sort } = req.query;

    const sortArgs = sort ? sort.split(",") : ["_id", "asc"];
    const sortField = sortArgs[0];
    const sortOrder = sortArgs[1] == "desc" ? -1 : 1;

    const query = await PictureModel.aggregate()
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
