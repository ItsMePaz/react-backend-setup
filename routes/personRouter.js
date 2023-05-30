import express from "express";
import personController from "../controllers/personController.js";

const personRouter = express.Router();

personRouter.get("/", personController.getPersons);

export default personRouter;
