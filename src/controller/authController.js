const User = require("../models/userModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


const register = async (req,res) => {
    try{
  const {username,password,role} = req.body;
  const hashpassword = await bcrypt.hash(password,10);
  const newUser = new User({username,password:hashpassword,role});
  await newUser.save();
  res.status(201).json({msg: `new user created ${username}`})
    }catch(err){
        res.status(500).json({msg:`something went wrong while registering ${err}`})
    }
}


const login = async (req,res) => {
    try{
 const {username,password} = req.body;
 const user = await User.findOne({username});
 if(!user) {
    return res.status(404).json({msg:`User ${username} not found try Again!!`})
 }
 const isMatch = await bcrypt.compare(password,user.password);
 if(!isMatch){
    return res.status(401).json({msg:"Incorect password!! Try Again"})
 }
 const token = jwt.sign({id:user._id,role:user.role},
                         process.env.JWT_SECRET,
                        {expiresIn:"1h"} )
 res.status(200).json({msg:`welcome ${username} token: ${token}`})

   }catch(err){
        res.status(500).json({msg:`something went wrong : ${err}`})
    }
}

module.exports = {
    register,login
}