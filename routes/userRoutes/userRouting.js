const router=require("express").Router();
const userModel=require("../../model/userModel");
const passwordUtil=require("../../Helpers/hash_match_password");
const Validation=require("../../middlewares/userValidation");

router.post("/signup",Validation.checkEmail,Validation.checkPhoneNumber,async(req,res)=>{
    const firstname=req.body.fname;
    const lastname=req.body.lname;
    const email=req.body.email;
    const phoneNumber=req.body.phoneNumber;
    const password=await passwordUtil.hashPassword(req.body.password);
    const balance=req.body.balance;
    const user=new userModel({firstname,lastname,email,phoneNumber,password,balance})
    console.log(req.body)
    try {
        const data=await user.save();
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({"message":error});
    }

})


module.exports=router;