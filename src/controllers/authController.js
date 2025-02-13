import User from "../models/userModel.js";


export const register = async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.sataus(201).json({message:"User registered succesfully"});
    } catch (error) {
        console.error("Server error")
        res.sataus(500).json({message:"Error registering user"});
    }
};


export const login = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
  
      if (!user || !(await user.comparePassword(password))) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
  
      const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
        expiresIn: "1d",
      });
  
      res.status(200).json({ token, user });
    } catch (error) {
        console.error("Server Error");
      res.status(500).json({ message: "Error logging in" });
    }
  };