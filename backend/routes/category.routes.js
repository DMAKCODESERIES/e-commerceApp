import { Router } from "express";
import { addCategories, deleteCategory, getAllCategories, updateCategory } from "../controllers/catagories.Controller.js";
import multer from "multer";

const upload = multer({ dest: 'uploads/' });

const router = Router();

router.route('/addCategory').post(upload.single('image'), addCategories); 
router.route('/getAllCategories').get(getAllCategories);
router.route('/deleteCategory/:id').delete(deleteCategory);
router.route('/updateCategory/:id').put(updateCategory); 

export default router;
