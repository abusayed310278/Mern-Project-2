import express from 'express';
import Product from '../models/product.model.js';
import mongoose from 'mongoose';    

const router = express.Router();

router.post("/", async(req, res) => {

    const product = req.body;
    // Validate the product data
    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({success:false, message: "Please provide all fields." });
    }

    const newProduct= new Product(product)
    
    try {
        await newProduct.save();
        res.status(201).json({success:true, message: "Product created successfully", data: newProduct });
    } catch (error) {
        console.error("Error creating product:", error.message);
        res.status(500).json({success:false, message: "Server error" });
    }
    

});

router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    console.log("Deleting product with ID:", id);

    try {
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).json({success:false, message: "Product not found" });
        }
        res.status(200).json({success:true, message: "Product deleted successfully" });
    } catch (error) {
        console.error("Error deleting product:", error.message);
        res.status(500).json({success:false, message: "Server error" });
    }
});

router.get("/", async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json({success:true, data: products });
    } catch (error) {
        console.error("Error fetching products:", error.message);
        res.status(500).json({success:false, message: "Server error" });
    }
});

router.patch("/:id", async (req, res) => { 
    const { id } = req.params;
    const updatedData = req.body;

    try {
        const product = await Product.findByIdAndUpdate(id, updatedData, { new: true });
        if (!product) {
            return res.status(404).json({success:false, message: "Product not found" });
        }
        res.status(200).json({success:true, message: "Product updated successfully", data: product });
    } catch (error) {
        console.error("Error updating product:", error.message);
        res.status(500).json({success:false, message: "Server error" });
    }
});










export default router;