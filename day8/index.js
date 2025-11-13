import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import cors from 'cors';
import route from './routes/route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/api/auth", route)


connectDB()

app.listen(PORT,()=>{
    console.log(`Server successfully running on http://localhost:${PORT}`);
    
})