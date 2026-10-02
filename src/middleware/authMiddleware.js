const jwt = require("jsonwebtoken");

const veryfyToken = (req,res,next) => {
  let token;
  let authHeader = req.headers.Authorization || req.headers.authorization

if(authHeader || authHeader.startsWith("Bearer")){
    token = authHeader.split(" ")[1];

    if(!token){
        res.status(401).json({msg:"invalid token!!!, Authorization denied"})
    }
    try{
        const decode = jwt.verify(token,process.env.JWT_SECRET);
        req.user = decode ;
        console.log(`decoded user is ${req.user}`)
        next();
    }catch(err){
        res.status(500).json({msg:`server error : ${err}`})
    }
}else{
        res.status(401).json({msg:"No token detected!!!, Token required!!"})
}
}

module.exports = veryfyToken ;