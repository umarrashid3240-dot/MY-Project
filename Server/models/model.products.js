import mongoose from 'mongoose';
 
import { Schema , model} from 'mongoose';

   const productSchema = new Schema({
       title: {
               type: String,
               required: true,
       },
        brand: {
               type: String,
               required: true,
       },
        category: {
               type: String,
               required: true,
       },
        images: {
               type: String,
               required: true,
       },
        price: {
               type: Number,
               required: true,
       },
        stock: {
               type: number,
               required: false,
               default: 0,
       }
   })

 const products =  model("products", productSchema)

   export default products