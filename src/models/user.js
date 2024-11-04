"use strick"

const mongoose=require("../config/dbConnection")


const UserSchema=new mongoose.Schema({
   userName:{
    type: String,
    trim:true,
    required:true,
    unique:true
   }, 
   password:{
    type: String,
    trim:true,
    required:true,
    unique:true
   }
})