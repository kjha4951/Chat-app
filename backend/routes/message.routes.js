import express from "express";
import { sendMessage } from "../controller/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";
import { getMessages } from "../controller/message.controller.js";

const router=express.Router();

router.post("/send/:id",protectRoute,sendMessage);
router.get("/:id",protectRoute,getMessages);

export default router;