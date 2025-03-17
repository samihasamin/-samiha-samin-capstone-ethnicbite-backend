import express from "express";
import { placeOrder } from "../controllers/orders-controller";

const router = express.Router();

router.post("/", placeOrder);

export default router;
