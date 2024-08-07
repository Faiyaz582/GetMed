import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./Routes/auth.js";
import userRoute from "./Routes/user.js";
import doctorRoute from "./Routes/doctor.js";
import reviewRoute from "./Routes/review.js";
import { log } from "./middlewares/logger.js";

dotenv.config();

const app = express();

const port = process.env.PORT || 8000;

const corsOptions = {
  origin: true,
};

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database is connected"))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));

app.use(log);

console.log("JWT_SECRET_KEY:", process.env.JWT_SECRET_KEY);



app.get("/", (req, res) => {
  res.send("Api is working");
});
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/doctors", doctorRoute);
app.use("/api/v1/reviews", reviewRoute);


app.listen(port, () => {
  console.log("Server is running on port " + port);
});
