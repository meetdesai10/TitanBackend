import express from "express";
import {
  createTodo,
  deleteTodo,
  getTodoById,
  updateTodo,
} from "../controler/todo.js";

const orderRouter = express.Router();

orderRouter.post("/create", createTodo);

orderRouter.get("/getTodoById/:id", getTodoById);

orderRouter.put("/update/:id", updateTodo);

orderRouter.delete("/delete/:id", deleteTodo);

export default orderRouter;
