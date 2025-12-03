

import express from 'express';
import mongoose from 'mongoose';

 
const DB_URL ="mongodb+srv://admin:12345@clustershopbin.zzwvusm.mongodb.net/shopbin"

// initialize
const app = express()
const port = "8080"
app.use('',(req,res) =>{
    res.send('Api is up and running')
})
import prodRoute from './routes/route.products.js'; 
app.use("api/v1",prodRoute)

// http://localhost:880/api/v1/products

// first builtin fuction of express
app.listen(port,()=>{
    console.log(`server is running : http://localhost:${port}`)
})

// mongoose.connect(DB_URL)
//         .then(conn =>console.log("db is connected! + conn.connection.host"))
//         .catch(err =>console.log("db is fail to connected!"))


// app.get("/api/products",(req,res)=>{
//       res.send('i m going to fetch all product from datbase')
// });

// app.listen(port, ()=>{
//     console.log(`Express server is running on port ${port}`)
// })