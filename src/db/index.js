import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.DATA_BASE_URL)
    .then((res) => {
      console.log("Databadse connection successful...!");
    })
    .catch((err) => {
      console.log("Database connection faild...", err);
    });
};
