import express from "express";
import {
  createWishlist,
  getByUserId,
  updateWishlist,
} from "../controler/wishlist.js";
import { authorized } from "../auth/index.js";

const wishListRouter = express.Router();

wishListRouter.post("/create", authorized, createWishlist);

wishListRouter.get("/getByUserId", authorized, getByUserId);

wishListRouter.put("/update", authorized, updateWishlist);

export default wishListRouter;
