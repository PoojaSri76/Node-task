import express from "express";
import { userController } from "../controller/usercontroller.js";

const router = express.Router();

router.post("/users",userController)

export default router;