import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import config from "./utils/config.js";
import personRouter from "./routes/personRouter.js";

const app = express();

async function connectToDB(url) {
  await mongoose.connect(config.MONGODB_URI);
  console.log("Connected to DB");
}

connectToDB;

app.use(express.json());
app.use(cors());
app.use(express.static("dist"));
app.use("/api/persons", personRouter);

export default app;
