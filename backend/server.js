// // const express = require("express");
// // const dotenv=require("dotenv");


// //after script fo type = module in package.json
// import express from "express";
// import dotenv from "dotenv";
// import cookieParser from "cookie-parser";


// import authRoutes from "./routes/auth.routes.js";
// import messageRoutes from "./routes/message.routes.js";
// import userRoutes from "./routes/user.routes.js";


// import connectToMongoDB from "./db/conectToMongoDB.js";

// const app=express();
// const PORT=process.env.PORT || 5000;

// dotenv.config();

// app.use(express.json());//to accept json data(from res.body)
// app.use(cookieParser());


// app.get("/",(req,res)=>{
//     //root route
//     res.send("hello world");
// });


// //use routes  for api new way 
// app.use("/api/auth",authRoutes);
// app.use("/api/message",messageRoutes);
// app.use("/api/users",userRoutes);




// app.listen(PORT,()=> {
//     connectToMongoDB();
//     console.log(`server is running on port ${PORT}`)
// });

import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/conectToMongoDB.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`server is running on port ${PORT}`);
});