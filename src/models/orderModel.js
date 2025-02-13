import mongoose from "mongoose";

const OrderSchema = mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Product",
        required : true
    },

    item : [
        {
            product :{
                type : mongoose.Schema.Types.ObjectId,
                ref : "Product",
                required : true,
            },

            quantity :{
                type : Number,
                required : true
            }
        },
    ],

    totalAmount : {
        type : Number,
        required : true
    },

    status : {
        type : String,
        enum : ["Pending", "Skipped", "Delivered"],
        default : "Pending"
    },
}, { timestamps :true });


const Order = mongoose.model("Order", OrderSchema);

export default Order;