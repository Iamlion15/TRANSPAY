const{model,Schema}=require("mongoose");
const userSchema=new Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    balance:{
        type:Number,
        required:true
    }
});

const userModel=model("user",userSchema);

module.exports=userModel;