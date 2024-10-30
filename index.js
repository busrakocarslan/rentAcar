"use strick"


// expressi projeye bağlayıp app a ekledim
const express = require("express")
const app=express()

require("dotenv").config();
const HOST= process.env?.HOST || "127.0.0.1"
const PORT= process.env?.PORT || 8000



// DB yi bağlama
const {dbConnection}= require("./src/config/dbConnection")

app.use(express.json())



// RUN SERVER 
app.listen(PORT,HOST,()=>console.log(`http://${HOST}:${PORT}`))