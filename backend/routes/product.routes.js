import { Router } from "express";
import multer from "multer";
import { addProducts, deleteProduct, getAllProducts, updateProduct } from "../controllers/product.Controller.js";
const upload = multer({ dest: 'uploads/' });

const router = Router();

router.route('/addProducts').post(upload.single('image'), addProducts);
router.route('/updateProducts').post(upload.single('image'), updateProduct);
router.route('/products').get(getAllProducts);
router.route('/delete/:id').delete(deleteProduct)



export default router;