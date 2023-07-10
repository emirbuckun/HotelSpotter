import { QuestionModel } from "../models/Question.js";

export const insertQuestion = async (req, res, next) => {
  try {
    const newQuestion = new QuestionModel(req.body);
    const savedQuestion = await newQuestion.save();
    res.status(200).json(savedQuestion);
  } catch (err) {
    next(err);
  }
};

export const updateQuestion = async (req, res, next) => {
  try {
    const updatedQuestion = await QuestionModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedQuestion);
  } catch (err) {
    next(err);
  }
};

export const deleteQuestion = async (req, res, next) => {
  try {
    const deletedQuestion = await QuestionModel.findByIdAndDelete(
      req.params.id
    );
    res.status(200).json(deletedQuestion);
  } catch (err) {
    next(err);
  }
};

export const getQuestion = async (req, res, next) => {
  try {
    const question = await QuestionModel.findById(req.params.id);
    res.status(200).json(question);
  } catch (err) {
    next(err);
  }
};

export const getQuestions = async (req, res, next) => {
  try {
    const { page, limit, sort } = req.query;

    const sortArgs = sort ? sort.split(",") : ["_id", "asc"];
    const sortField = sortArgs[0];
    const sortOrder = sortArgs[1] == "desc" ? -1 : 1;

    const query = await QuestionModel.aggregate()
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
