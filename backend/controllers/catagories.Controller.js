///**************** post category
import Category from "../models/Catagory.Model.js";
const addCategarios=( async (req, res) => {
    try {
        const { name, description } = req.body;
        console.log("New category data received", ({ name, description }));
        console.log(req.body)

        if (!name || !description) {
            return res.status(400).send({ message: "All fields are required" });
        }
        const category = new Category({ name, description });
        await category.save();
        console.log(category)
        res.status(200).send(
            {
                "message": category,
                "timestamp": new Date().toISOString()
            }
        );

    } catch (error) {
        console.log("Error", error);
        res.status(500).send("Internal server error");
    }
})

///**************delete category by id
const deleteCatagory=( async (req, res) => {
    const id = req.params.id;
    try {
        if (!id) {
            return res.status(400).send({ message: "Invalid category ID" });
        }
        const category = await Category.findById(id);
        if (!category) {
            return res.status(404).send({ message: "Category not found" });
        }
        await Category.findByIdAndDelete(id)
        res.status(200).json({ message: "Category deleted successfully" })
        console.log("Category deleted successfully")
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error");
    }
})

///*************get all categories */

const getAllCategories=( async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).send(categories);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error");
    }
})

///**************update category by id

const updateCategories=( async (req, res) => {
    const id = req.params.id;
    try {
        if (!id) {
            return res.status(400).send({ message: "Invalid category ID" });
        }
        const category = await Category.findByIdAndUpdate(id, req.body, { new: true });
        if (!category) {
            return res.status(404).send({ message: "Category not found" });
        }
        res.status(200).json(category)
        console.log("Category updated successfully")
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error");
    }
})
export { addCategarios ,deleteCatagory, getAllCategories, updateCategories  }