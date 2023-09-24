import express from "express";
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import router from "./routes/user-routes";
import blogRouter from "./routes/blog-routes";
const app = express();
app.use(express.json());
app.use("/api/user",router);
app.use("/api/blog",blogRouter);
mongoose.connect(process.env.MONGODB_URI,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>app.listen(5000))
.then(()=>
    console.log("connect to database port 5000")
)
.catch((err)=>console.log(err));