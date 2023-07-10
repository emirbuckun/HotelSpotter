import { UserRoleModel } from "../models/UserRole.js";

export const insertUserRole = async (req, res, next) => {
  try {
    const newUserRole = new UserRoleModel(req.body);
    const savedUserRole = await newUserRole.save();
    res.status(200).json(savedUserRole);
  } catch (err) {
    next(err);
  }
};

export const updateUserRole = async (req, res, next) => {
  try {
    const updatedUserRole = await UserRoleModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedUserRole);
  } catch (err) {
    next(err);
  }
};

export const deleteUserRole = async (req, res, next) => {
  try {
    const deletedUserRole = await UserRoleModel.findByIdAndDelete(
      req.params.id
    );
    res.status(200).json(deletedUserRole);
  } catch (err) {
    next(err);
  }
};

export const getUserRole = async (req, res, next) => {
  try {
    const userRole = await UserRoleModel.findById(req.params.id);
    res.status(200).json(userRole);
  } catch (err) {
    next(err);
  }
};

export const getUserRoleByUserID = async (req, res, next) => {
  try {
    const userRole = await UserRoleModel.find({ userID: req.params.id });
    res.status(200).json(userRole);
  } catch (err) {
    next(err);
  }
};

export const getUserRoles = async (req, res, next) => {
  try {
    const { page, limit, sort } = req.query;

    const sortArgs = sort ? sort.split(",") : ["_id", "asc"];
    const sortField = sortArgs[0];
    const sortOrder = sortArgs[1] == "desc" ? -1 : 1;

    const query = await UserRoleModel.aggregate()
      .lookup({
        from: "users",
        localField: "userID",
        foreignField: "_id",
        as: "user",
      })
      .unwind("user")
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
