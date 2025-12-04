

// import express from 'express';
// import mongoose from 'mongoose';

 
// const DB_URL ="mongodb+srv://admin:12345@clustershopbin.zzwvusm.mongodb.net/shopbin"

// initialize
// const app = express()
// const port = "8080"
// app.use('',(req,res) =>{
//     res.send('Api is up and running')
// })
// import prodRoute from './routes/route.products.js'; 
// app.use("api/v1",prodRoute)

// // http://localhost:880/api/v1/products

// // first builtin fuction of express
// app.listen(port,()=>{
//     console.log(`server is running : http://localhost:${port}`)
// })

// mongoose.connect(DB_URL)
//         .then(conn =>console.log("db is connected! + conn.connection.host"))
//         .catch(err =>console.log("db is fail to connected!"))


// app.get("/api/products",(req,res)=>{
//       res.send('i m going to fetch all product from datbase')
// });

// app.listen(port, ()=>{
//     console.log(`Express server is running on port ${port}`)
// })

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/authRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/admin", adminRoutes);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("✅ MongoDB Connected Successfully!");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.log(err));
