import { OwnershipModel } from "../models/Ownership.js";

export const insertOwnership = async (req, res, next) => {
  try {
    const newOwnership = new OwnershipModel(req.body);
    const savedOwnership = await newOwnership.save();
    res.status(200).json(savedOwnership);
  } catch (err) {
    next(err);
  }
};

export const updateOwnership = async (req, res, next) => {
  try {
    const updatedOwnership = await OwnershipModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedOwnership);
  } catch (err) {
    next(err);
  }
};

export const deleteOwnership = async (req, res, next) => {
  try {
    const deletedOwnership = await OwnershipModel.findByIdAndDelete(
      req.params.id
    );
    res.status(200).json(deletedOwnership);
  } catch (err) {
    next(err);
  }
};

export const getOwnership = async (req, res, next) => {
  try {
    const ownership = await OwnershipModel.findById(req.params.id);
    res.status(200).json(ownership);
  } catch (err) {
    next(err);
  }
};

export const getOwnerships = async (req, res, next) => {
  try {
    const { page, limit, sort } = req.query;

    const sortArgs = sort ? sort.split(",") : ["_id", "asc"];
    const sortField = sortArgs[0];
    const sortOrder = sortArgs[1] == "desc" ? -1 : 1;

    const query = await OwnershipModel.aggregate()
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
