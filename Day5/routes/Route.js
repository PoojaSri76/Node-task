import express from 'express'
import { AuthController, formController, reverseController } from '../controller/AuthController.js';

const router = express.Router()

router.post("/data",AuthController)
router.post("/reverse", reverseController)

export default router;


// http://localhost:3000/api/auth/datas