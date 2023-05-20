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

const app = express();

app.use(express.json());
app.use(cors());

dotenv.config();

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

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => {
    console.log("MongoDB is connected!");
  })
  .catch((err) => {
    console.log(err.message);
  });

const listener = app.listen(3001, () =>
  console.log("Server Started! Port: " + listener.address().port)
);
