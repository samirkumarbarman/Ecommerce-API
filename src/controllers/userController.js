import User from "../models/userModel.js";

export const getUser = async (req, res) => {
    try {
        const user = await User.find();
        res.status(200).json(user);
    } catch (error) {
        console.error("Server eror");
        res.status(500).json({message:"Error Fatching"});
    }
};


export const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user){
            return res.status(404).json({message:"User not Found"});
        }
        res.status(200).json(user);
    } catch (error) {
        console.error("Server error");
        res.status(500).json({message:"Error fatching"});
    }
} ;