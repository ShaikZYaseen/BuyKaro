import express from 'express';
import connectDB from './src/DB/index.DB.js';
const app = express();
import dotenv from 'dotenv';    

dotenv.config({
    path: './.env'
})






connectDB();

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});