import { AnswerModel } from "../models/Answer.js";

export const insertAnswer = async (req, res, next) => {
  try {
    const newAnswer = new AnswerModel(req.body);
    const savedAnswer = await newAnswer.save();
    res.status(200).json(savedAnswer);
  } catch (err) {
    next(err);
  }
};

export const updateAnswer = async (req, res, next) => {
  try {
    const updatedAnswer = await AnswerModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedAnswer);
  } catch (err) {
    next(err);
  }
};

export const deleteAnswer = async (req, res, next) => {
  try {
    const deletedAnswer = await AnswerModel.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedAnswer);
  } catch (err) {
    next(err);
  }
};

export const getAnswer = async (req, res, next) => {
  try {
    const answer = await AnswerModel.findById(req.params.id);
    res.status(200).json(answer);
  } catch (err) {
    next(err);
  }
};

export const getAnswers = async (req, res, next) => {
  try {
    const { page, limit, sort } = req.query;

    const sortArgs = sort ? sort.split(",") : ["_id", "asc"];
    const sortField = sortArgs[0];
    const sortOrder = sortArgs[1] == "desc" ? -1 : 1;

    const query = await AnswerModel.aggregate()
      .lookup({
        from: "users",
        localField: "userID",
        foreignField: "_id",
        as: "user",
      })
      .lookup({
        from: "questions",
        localField: "questionID",
        foreignField: "_id",
        as: "question",
      })
      .lookup({
        from: "hotels",
        localField: "question.hotelID",
        foreignField: "_id",
        as: "hotel",
      })
      .unwind("user")
      .unwind("question")
      .unwind("hotel")
      .project({
        userID: "$userID",
        questionID: "$questionID",
        hotelID: "$hotel._id",
        hotelName: "$hotel.name",
        userMail: "$user.mail",
        userName: { $concat: ["$user.firstName", " ", "$user.lastName"] },
        question: "$question.description",
        answer: "$description",
        createDate: "$createDate",
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
