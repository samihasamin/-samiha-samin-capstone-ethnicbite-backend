import express from "express";
import {
  placeOrder,
  getOrderById,
  getAllOrders,
} from "../controllers/orders-controller.js";

const router = express.Router();

router.post("/", placeOrder);
router.get("/", getAllOrders);
router.get("/:id", getOrderById);

export default router;
