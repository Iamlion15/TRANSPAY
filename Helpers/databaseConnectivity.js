const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/transpay",{useNewUrlParser:true});
const db=mongoose.connection;

db.on("error",error=>{
    console.log(error);
})

module.exports=db;