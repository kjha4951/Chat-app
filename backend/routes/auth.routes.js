import express from "express";
import { login,  logout, signup } from "../controller/auth.controller.js";

const router = express.Router();
import generateTokenAndSetCookie from '../utils/generateToken.js';

router.post("/signup",signup);
router.post("/login",login);
router.post("/logout",logout);


// router.post('/generate', (req, res) => {
//     const { userId } = req.body;

//     if (!userId) {
//         return res.status(400).json({ message: 'User ID is required' });
//     }

//     // Generate token and set it as a cookie
//     generateTokenAndSetCookie(userId, res);

//     res.status(200).json({ message: 'Logged in successfully' });
// });



export default router; 