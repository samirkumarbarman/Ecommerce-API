import mongoose from "mongoose";

const ProductSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },

    description : {
        type : String,
        required : true
    },

    price : {
        type : Number,
        required : true
    },

    catagory : {
        type : String,
        required : true
    },

    stock : {
        type : Number,
        default : 0
    },

    image : {
        type : String
    }
}, { timestamps : true});

const Product = mongoose.model("Product", ProductSchema);

export default Product;