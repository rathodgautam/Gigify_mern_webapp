import express from "express";
import { verifyToken } from "../middleware/jwt.js";
import {
  createMessage,
  getMessage,
}from "../controller/message.controller.js";
 
const router = express.Router();

router.post("/", verifyToken, createMessage );
router.get("/:id", verifyToken, getMessage );

export default router;  