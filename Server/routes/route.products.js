// /*step 1 import express*/
// import express from 'express';

// const prodRoute = express.Router();
//  prodRoute("products", (req, res)=>{
//     res.send('This is my produccyt route')
//  });

//  export default prodRoute;

// Step 1: Import express
import express from 'express';

// Step 2: Create router instance
const prodRoute = express.Router();

// Step 3: Define route with proper HTTP method (GET)
prodRoute.get("/products", (req, res) => {
    res.send('This is my product route');
});

// Step 4: Export router
export default prodRoute;
