
const authRoles = (...alloedRoles) => {
    return (req,res,next) => {
      if(!alloedRoles.includes(req.user.role)){
        res.status(403).json({msg:"Acces Denied!!! "})
      }
        next()
    }
}

module.exports = authRoles;
