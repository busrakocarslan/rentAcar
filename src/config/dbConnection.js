"use strick";

// mongoose işlemleri burada yapılacak

const mongoose = require("mongoose");

const dbConenction = function () {
  mongoose
    .connect(process.env.MONGODB)
    .then(() =>
      console.log("DB connected")
    .catch((err) => console.log("DB not Connected"))
    );
};

module.exports={
    mongoose,
    dbConenction
}

// mongoose u projeye bağlama işlemini gerçekleştirdikten sonra indexte çağır 