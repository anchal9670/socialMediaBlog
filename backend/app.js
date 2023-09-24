//adminBlog   (username)
//0EhPDWfTbV8EFMlp  (Password)
import express from "express";
import mongoose from 'mongoose';
//const router = require("../routes/user-routes");
import router from "./routes/user-routes";
import blogRouter from "./routes/blog-routes";
const app = express();
app.use(express.json());
app.use("/api/user",router);
app.use("/api/blog",blogRouter);
mongoose.connect('mongodb+srv://adminBlog:0EhPDWfTbV8EFMlp@user.nbzdsq0.mongodb.net/Blog?retryWrites=true&w=majority')
.then(()=>app.listen(5000))
.then(()=>
    console.log("connect to database port 5000")
)
.catch((err)=>console.log(err));