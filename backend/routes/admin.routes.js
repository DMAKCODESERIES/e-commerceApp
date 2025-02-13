
import { Router } from "express";
import { deleteUser, getAllUser } from "../controllers/Admin.Controller.js";
const router = Router()

router.route('/deleteUser/:id').delete(deleteUser)
router.route('/getAllUsers').get(getAllUser)



export default router