"use strick";

// config dosyası oluşturuğ mongoosu orada ayarladım buraya require ederken oradan alıyorum.
const {mongoose}=require("../config/dbConnection")


const TokenSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
        index:true// hızlı ulaşım için
    },

    token:{
        type: String,
        trim:true,
        required:true,
        index:true,
    }
},{
    collection:"tokens",timestamps:true
})


module.exports=mongoose.model("Token",TokenSchema)