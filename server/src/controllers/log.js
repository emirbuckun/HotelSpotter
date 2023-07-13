import { LogModel } from "../models/Log.js";

export const insertLog = async (req, res, next) => {
  try {
    const newLog = new LogModel(req.body);
    const savedLog = await newLog.save();
    res.status(200).json(savedLog);
  } catch (err) {
    next(err);
  }
};

export const updateLog = async (req, res, next) => {
  try {
    const updatedLog = await LogModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedLog);
  } catch (err) {
    next(err);
  }
};

export const deleteLog = async (req, res, next) => {
  try {
    const deletedLog = await LogModel.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedLog);
  } catch (err) {
    next(err);
  }
};

export const getLog = async (req, res, next) => {
  try {
    const log = await LogModel.findById(req.params.id);
    res.status(200).json(log);
  } catch (err) {
    next(err);
  }
};

export const getLogs = async (req, res, next) => {
  try {
    const { page, limit, sort } = req.query;

    const sortArgs = sort ? sort.split(",") : ["_id", "asc"];
    const sortField = sortArgs[0];
    const sortOrder = sortArgs[1] == "desc" ? -1 : 1;

    const query = await LogModel.aggregate()
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

export const log = async (logType, description, isSuccess) => {
  try {
    const newLog = new LogModel({ logType, description, isSuccess });
    await newLog.save();
    return "New log recorded.";
  } catch (err) {
    return "Error occured while inserting new log";
  }
};
