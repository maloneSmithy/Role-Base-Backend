const express = require('express')
const Router = express.Router()
const veryfyToken = require("../middleware/authMiddleware")
const authRoles = require("../middleware/roleMiddleware")


//Only Admin can access this route 
Router.get("/admin",veryfyToken,authRoles("admin"),(req,res) => {
  res.json({msg:"hello and Welcome Admin"})
}
)
//Only Admin and Manager can acess this route
Router.get("/manager", veryfyToken,authRoles("admin","manager"),(req,res) => {
  res.json({msg:"hello and Welcome Manager"})
}
)//Anyone loged in as user can access this route
Router.get("/user",veryfyToken,authRoles("admin","manager","user"),(req,res) => {
  res.json({msg:"hello and Welcome user"})
}
)

module.exports = Router ;