const express =require("express");
const connectivity=require("./Helpers/databaseConnectivity");
const app=express();

app.listen(6000,()=>{
    console.log("SERVER STARTED ON PORT 6000");
})