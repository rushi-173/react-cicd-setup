import dotenv from "dotenv";
dotenv.config();

import express from "express";
import connectDb from "./utils/db.js";
import cors from "cors";

const app = express();

// CORS Mention here
app.use(
  cors(
  //   {
  //   origin: "http://localhost:5173",
  //   methods: ["GET", "POST", "PUT", "DELETE"],
  //   credentials: true,
  // }
  )
);

//Middleware for parsing JSON
app.use(express.json());

//Main Route 
app.get("/", (req,res)=>{
res.json(({text:"Hello World"}))
});

const PORT = 5000;

// Databse and server connection
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running at port: ${PORT}`);
  });
});
