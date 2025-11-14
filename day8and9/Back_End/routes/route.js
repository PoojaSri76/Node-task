import express from "express";
import { getTableController, userController, userDetailsController } from "../controller/usercontroller.js";

const router = express.Router();

router.post("/users",userController);

router.post("/userdetails", userDetailsController);
router.get('/tabledata', getTableController)

export default router;

// http://localhost:3000/api/auth/