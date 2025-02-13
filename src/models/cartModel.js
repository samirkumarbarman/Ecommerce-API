import mongoose from "mongoose";

const CartShema = mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Product",
        required : true
    },

    items : [
        {
            product : {
                type : mongoose.Schema.Types.ObjectId,
                ref : "Product",
                required : true
            },

            quantity : {
                type : Number,
                required : true
            },
        }
    ],
}, { timestamps : true });

const Cart = mongoose.model("Cart", CartShema);

export default Cart;