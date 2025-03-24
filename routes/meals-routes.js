import express from "express";
import { getMeals } from "../controllers/meals-controller.js";

const router = express.Router();

router.get("/", getMeals);

export default router;
