import mongoose from 'mongoose';

const productsSchema = new mongoose.Schema({
    title: String,
    price: Number,
    description: String,
    image: String,
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }
})
const Products= mongoose.model('Product', productsSchema);
export default Products;