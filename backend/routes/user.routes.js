import { Router } from "express";
import { registerUser, loginUser, updateUser, logout } from '../controllers/user.Controller.js';

const router = Router();



router.route('/register').post(registerUser)
router.route('/login').post(loginUser)
router.route('/logout').get(logout)
router.route('/updateUser/:id').post(updateUser)


export default router;