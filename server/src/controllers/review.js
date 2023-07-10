import { ReviewModel } from "../models/Review.js";

export const insertReview = async (req, res, next) => {
  try {
    const newReview = new ReviewModel(req.body);
    const savedReview = await newReview.save();
    res.status(200).json(savedReview);
  } catch (err) {
    next(err);
  }
};

export const updateReview = async (req, res, next) => {
  try {
    const updatedReview = await ReviewModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedReview);
  } catch (err) {
    next(err);
  }
};

export const deleteReview = async (req, res, next) => {
  try {
    const deletedReview = await ReviewModel.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedReview);
  } catch (err) {
    next(err);
  }
};

export const getReview = async (req, res, next) => {
  try {
    const review = await ReviewModel.findById(req.params.id);
    res.status(200).json(review);
  } catch (err) {
    next(err);
  }
};

export const getByReservationID = async (req, res, next) => {
  try {
    const review = await ReviewModel.findOne({ reservationID: req.params.id });
    res.status(200).json(review);
  } catch (err) {
    next(err);
  }
};

export const getReviews = async (req, res, next) => {
  try {
    const { page, limit, sort } = req.query;

    const sortArgs = sort ? sort.split(",") : ["_id", "asc"];
    const sortField = sortArgs[0];
    const sortOrder = sortArgs[1] == "desc" ? -1 : 1;

    const query = await ReviewModel.aggregate()
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
      .lookup({
        from: "reservations",
        localField: "reservationID",
        foreignField: "_id",
        as: "reservation",
      })
      .unwind("user")
      .unwind("hotel")
      .unwind("reservation")
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
