import Category from "../models/Catagory.Model.js";

const addCategories = async (req, res) => {
    try {
        const { name, description } = req.body;
        const image = req.file ? req.file.path : null; 

        console.log("New category data received", { name, description, image });

        if (!name || !description || !image) {
            return res.status(400).send({ message: "All fields are required" });
        }

        const category = new Category({ name, description, image });
        await category.save();

        res.status(200).send({
            message: category,
            timestamp: new Date().toISOString()
        });

    } catch (error) {
        console.log("Error", error);
        res.status(500).send("Internal server error");
    }
};

const deleteCategory = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) {
            return res.status(400).send({ message: "Invalid category ID" });
        }
        const category = await Category.findById(id);
        if (!category) {
            return res.status(404).send({ message: "Category not found" });
        }
        await Category.findByIdAndDelete(id);
        res.status(200).json({ message: "Category deleted successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error");
    }
};

const getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).send(categories);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error");
    }
};

const updateCategory = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) {
            return res.status(400).send({ message: "Invalid category ID" });
        }
        const category = await Category.findByIdAndUpdate(id, req.body, { new: true });
        if (!category) {
            return res.status(404).send({ message: "Category not found" });
        }
        res.status(200).json(category);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error");
    }
};

export { addCategories, deleteCategory, getAllCategories, updateCategory };
