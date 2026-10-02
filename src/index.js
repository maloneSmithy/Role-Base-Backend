const express = require('express');
const dotenv = require('dotenv').config();
const dbConnect = require("./config/dbConnect")
const authRoutes = require("./routes/authRoutes")
const userRoutes = require("./routes/userRoutes")

dbConnect();
const app = express()

//middlewares
app.use(express.json())

//Routes
app.use("/api/auth",authRoutes)
app.use("/api/auth",userRoutes)

//starting server
const PORT = process.env.PORT || 3000 ;
app.listen(PORT,() => {
  console.log(`listining to the server..on port ${PORT}`)
})
