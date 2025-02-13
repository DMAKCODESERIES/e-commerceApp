import { Router } from "express";
import { addCategarios, deleteCatagory, getAllCategories, updateCategories } from "../controllers/catagories.Controller.js";

const router = Router();

router.route('/addCatagory').post(addCategarios)
router.route('/getAllCategories').get(getAllCategories)
router.route('/deleteCategory/:id').delete(updateCategories)
router.route('/updateCategory/:id').post(deleteCatagory)

export default router;