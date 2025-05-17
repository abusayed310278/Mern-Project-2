import express from 'express';
import Product from '../models/product.model.js';
import mongoose from 'mongoose';    
import { getProducts,createProduct,deleteProduct,updateProduct } from '../controllers/product.controller.js';

const router = express.Router();


router.get("/", getProducts);
router.post("/",createProduct);
router.delete("/:id",deleteProduct);
router.patch("/:id", updateProduct);

export default router;