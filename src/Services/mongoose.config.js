import mongoose from "mongoose";

export const connectToMongoDB=async()=>{

const url=process.env.DB_URL;

mongoose.connect(url)
  .then(() => console.log('Connected to mongodb!'))
  .catch((err)=>console.log(`Error while connecting to mongoDB: ${err.message}`));
}
