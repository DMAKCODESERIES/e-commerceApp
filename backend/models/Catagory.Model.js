import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name: String,
    description: String,
    // image: String,

})
// categories table in the database
const Category = mongoose.model('Catagories', categorySchema);

export default Category;