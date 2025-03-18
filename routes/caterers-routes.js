import express from "express";
import {
  getAllCaterers,
  getCatererById,
} from "../controllers/caterers-controller.js";

const router = express.Router();

router.get("/", getAllCaterers);

router.get("/cuisine", getAllCaterers);

router.get("/:id", getCatererById);

export default router;
