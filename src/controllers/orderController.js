import Order from "../models/orderModel.js";


export const createOrder = async (req, res) => {
    try {
        const newOrder = new Order(req.body);
        await newOrder.save();
        res.status(200).json(newOrder);
    } catch (error) {
        console.error("Server Error");
        res.status(500).json({message:"Error creating Order"});
    }
};

export const getUserOrder = async (req, res) => {
    try {
        const orders = await Order.find({user: req.user.id});
        res.status(200).json(orders);
    } catch (error) {
        console.error("Server error");
        res.status(500).json({message:"Error fatching order"});
    }
};