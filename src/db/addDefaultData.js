import Product from "../models/product.js";
import User from "../models/user.js";
import productdata from "../data/product.json" assert { type: "json" };

export async function AddAdmin() {
  try {
    let matchData = await User.findOne(
      { email: process.env.EMAIL },
      { email: 1 }
    );
    if (!matchData) {
      User.create({
        email: process.env.EMAIL,
        password: process.env.PASSWORD,
        userType: "admin",
      });
    }
  } catch (error) {
    console.log("---err in admin creation--->", error);
  }
}

export async function AddProductData() {
  try {
    const productData = await Product.countDocuments();
    if (productData === 0) {
      Product.create(productdata);
    }
  } catch (error) {
    console.log("--> to create product ---->", error);
  }
}
