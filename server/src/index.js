import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { amenityRouter } from "./routes/amenity.js";
import { answerRouter } from "./routes/answer.js";
import { hotelRouter } from "./routes/hotel.js";
import { locationRouter } from "./routes/location.js";
import { logRouter } from "./routes/log.js";
import { ownershipRouter } from "./routes/ownership.js";
import { pictureRouter } from "./routes/picture.js";
import { questionRouter } from "./routes/question.js";
import { reservationRouter } from "./routes/reservation.js";
import { reviewRouter } from "./routes/review.js";
import { roomRouter } from "./routes/room.js";
import { userRouter } from "./routes/user.js";
import { userRoleRouter } from "./routes/userRole.js";

import { logHandler } from "./logHandler.js";
import { createError } from "../utils/error.js";

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());

app.use(logHandler);
app.use("/amenity", amenityRouter);
app.use("/answer", answerRouter);
app.use("/hotel", hotelRouter);
app.use("/location", locationRouter);
app.use("/log", logRouter);
app.use("/ownership", ownershipRouter);
app.use("/picture", pictureRouter);
app.use("/question", questionRouter);
app.use("/reservation", reservationRouter);
app.use("/review", reviewRouter);
app.use("/room", roomRouter);
app.use("/user", userRouter);
app.use("/userRole", userRoleRouter);

// Invalid Path Handler
app.use(function (req, res, next) {
  next(createError(404, "Path not found!"));
});

// Error Handler
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

// Connect Database
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to MongoDB.");
  })
  .catch((err) => {
    console.log(err.message);
  });

// Listen Server
const listener = app.listen(3001, () =>
  console.log("Connected to server on port: " + listener.address().port)
);
