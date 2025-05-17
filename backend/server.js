import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Product from "./models/product.model.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());



console.log(process.env.MONGO_URI);

app.listen(PORT, () => {
  // Connect to MongoDB
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
