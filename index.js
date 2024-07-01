import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import { connectToMongoDB } from './src/Services/mongoose.config.js';
import { questionRouter } from './src/Routes/question.route.js';
import { optionRouter } from './src/Routes/option.route.js';

const app=express();

app.use('/questions',questionRouter);
app.use('/options',optionRouter);
 
app.listen(3000,()=>{
    connectToMongoDB();
    console.log("server is running on port 3000");
})
