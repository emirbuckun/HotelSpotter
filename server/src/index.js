import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { userRouter } from "./routes/user.js";
import { amenityRouter } from "./routes/amenity.js";

const app = express();

app.use(express.json());
app.use(cors());

dotenv.config();

app.use("/user", userRouter);
app.use("/amenity", amenityRouter);

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => {
    console.log("MongoDB is connected!");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.listen(3001, () => console.log("Server Started!"));
