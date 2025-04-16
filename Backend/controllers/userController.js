const User=require('../model/User');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');
const generateToken = (userId) => {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
  };
exports.register=async(req,res)=>{
    try{
        const {name,email,password}=req.body;
        if(!name||!email||!password){
            res.status(401).json({
                success:false,
                message:"all fields are required"
            })
        }
        const userExist=await User.find(email);
        if(userExist){
            return res.status(400).json({
                success:false,
                message:"User Already exists"
            })
        }
        const user=await User.create({name,email,password});
        const token=generateToken(user._id);
        res.status(200).json({
            success:true,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
              },
              token,
        })
    }
    catch(error){
        res.status(401).json({
            success:false,
            message:error.message
        })
    }
}
exports.login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      const user = await User.findOne({ email });
      if (!user) return res.status(404).json({ message: "User not found" });
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch)
        return res.status(400).json({ message: "Invalid credentials" });
  
      const token = generateToken(user._id);
      res.json({
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
      },
      token,
    });
  } catch (error) {
    res.status(500).json({ message: "Login failed", error });
  }
};