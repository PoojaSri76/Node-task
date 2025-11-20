import express from "express";
import { getTableController, userController, userDetailsController, editController, deleteController } from "../controller/usercontroller.js";

const router = express.Router();

router.post("/users",userController);

router.post("/userdetails", userDetailsController);
router.get('/tabledata', getTableController);
router.put("/editdata/:id",editController);
router.delete("/delete/:id", deleteController);

export default router;

// http://localhost:3000/api/auth/