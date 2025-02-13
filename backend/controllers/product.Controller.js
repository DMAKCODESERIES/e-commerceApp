////////add produc in category by id
import Category from "../models/Catagory.Model.js";
import Products from "../models/product.model.js";
const addProducts = async (req, res) => {
    // const { categoryId } = req.params;
    const { title, price, description, image, categoryId } = req.body;
    try {
        const category = await Category.findById(categoryId);

        if (!category) {
            return res.json({ message: "Category not found" }).status(404);
        }
        const product = new Products({
            title,
            price,
            description,
            image,
            category: categoryId
        });
        await product.save();
        res.json({ message: "Product added successfully", product }).status(201);
    } catch (error) {
        console.log(error);
        res.json({ message: "Internal server error" }).status(500);
    }
}


//////update products

import Product from "../models/product.model.js"; // Ensure correct model name

const updateProduct = async (req, res) => {
    // const { productId } = req.params;
    const { title, price, description, image ,productId} = req.body;

    try {
        const product = await Products.findByIdAndUpdate(
            productId,
            { title, price, description, image },
            { new: true }
        );
    
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({ message: "Product updated successfully", product });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}

/////get all products
const getAllProducts=async(req, res) => {
    try {
        const products = await Products.find();
        res.status(200).send(products);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error");
    }
}
//////delete a product

const deleteProduct=async(req,res)=>{
    const{id}=req.params
    if (!id) {
        return res.status(400).json({ message: "Product ID not provided" });
    }
    try {
        const product = await Products.findByIdAndDelete(id);

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        console.log(error)
    }
}

export { addProducts, updateProduct, getAllProducts, deleteProduct };