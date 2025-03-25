import express from "express";
import {
  getAllCaterers,
  getCatererById,
  getCaterersByCuisine,
} from "../controllers/caterers-controller.js";

const router = express.Router();

router.get("/", getAllCaterers);

router.get("/cuisine/:type", getCaterersByCuisine);

router.get("/:id", getCatererById);

export default router;
