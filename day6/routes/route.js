import express from 'express';
import { bodyController, headerController, paramsController, queryController } from '../controller/allController.js';
 const router = express.Router();

 router.post("/body", bodyController )
 router.get("/body/:warriorId", paramsController)
 router.get("/query", queryController)
 router.get("/header", headerController)

 export default router;