import Cart from "../models/cartModel.js";


export const getCart = async (req, res) => {
    try {
        const cart = await Cart.findOne({user : req.user.id}).populate("items.product");
        if (!cart) {
            return res.status(404).json({message:"Cart not found"});
        }
        res.status(200).json(cart);
    } catch (error) {
        console.error("Server error");
        res.status(500).json({message:"Error fatching cart"});
    }
};

export const addToCart = async (req, res) => {
    try {
        const {product, quantity} = req.body;
        let cart = await Cart.findOne({user :req.user.id});
        if (!cart){
            cart = new Cart({user : req.user.id, items:[]});
            const itemIndex = cart.item.findindex((item) => item.peoduct.toString()=== product);

            if (!itemIndex > -1){
                cart.items[itemIndex].quantity += quantity;
            } else {
                cart.item.push({product, quantity});
            }
            await cart.save();
        }
        res.status(200).json(cart);
    } catch (error) {
        console.error("Server error");
        res.status(500).json({message:"Error to adding cart"});
    }
};