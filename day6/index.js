import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import route from './routes/route.js';

dotenv.config();

const app = express();

const  port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())
app.use("/api/auth", route)


app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);
    
})