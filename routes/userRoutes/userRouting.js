const router=require("express").Router();
const userModel=require("../../model/userModel");
const passwordUtil=require("../../Helpers/hash_match_password");

router.post("/signup",async(req,res)=>{
    const fname=req.body.fname;
    const lname=req.body.lname;
    const email=req.body.email;
    const phone=req.body.phone;
    const password=await passwordUtil.hashPassword(req.body.password);
    const balance=req.body.balance;
    const user=new userModel({fname,lname,email,phone,password,balance})
    try {
        const data=await user.save();
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({"message":"unable to save"});
    }

})