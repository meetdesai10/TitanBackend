import express from "express";
import { authorized } from "../auth/index.js";
import {
  createOrder,
  deleteOrder,
  getOrderById,
  updateOrder,
} from "../controler/order.js";

const orderRouter = express.Router();

orderRouter.post("/create", authorized, createOrder);

orderRouter.get("/getOrderById/:id", authorized, getOrderById);

orderRouter.put("/update/:id", authorized, updateOrder);

orderRouter.delete("/delete/:id", authorized, deleteOrder);

export default orderRouter;
