const router=require("express").Router();
const userModel=require("../../model/userModel");
const passwordUtil=require("../../Helpers/hash_match_password");
const Validation=require("../../middlewares/userValidation");
const checkCredentials=require("../../Helpers/checkCredentials");

router.post("/signup",Validation.checkEmail,Validation.checkPhoneNumber,async(req,res)=>{
    const firstname=req.body.fname;
    const lastname=req.body.lname;
    const email=req.body.email;
    const phoneNumber=req.body.phoneNumber;
    const password=await passwordUtil.hashPassword(req.body.password);
    const balance=req.body.balance;
    const user=new userModel({firstname,lastname,email,phoneNumber,password,balance})
    try {
        const data=await user.save();
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({"message":error});
    }

})


router.post("/login",async(req,res)=>{
    const phoneNumber=req.body.phone;
    const password=req.body.password;
    const isMatching=await checkCredentials(phoneNumber,password);
    if(isMatching==true)
    {
        res.status(200).json({"message":"logged in successful"})
    }
    else if(isMatching==null)
    {
        res.status(200).json({"message":"cant find user"})
    }
    else
    {
        res.status(200).json({"message":"password not matching phone number"})
    }
    
})

module.exports=router;