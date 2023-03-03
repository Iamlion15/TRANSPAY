const express =require("express");
const connectivity=require("./Helpers/databaseConnectivity");
const bodyparser=require("body-parser");
const userRoutes=require("./routes/userRoutes/userRouting");
const app=express();

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

//routes
app.use("/api/users",userRoutes);


app.listen(6000,()=>{
    console.log("SERVER STARTED ON PORT 6000");
})