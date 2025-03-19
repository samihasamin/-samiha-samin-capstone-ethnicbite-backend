import express from "express";
import { getAllCuisines } from "../controllers/cuisine-controller.js";

const router = express.Router();

router.get("/", getAllCuisines);

export default router;
