const multer=require("multer")
const userModel=require("../model/userModel");
const path=require("path");

const destination =multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,path.join(path.dirname(__dirname),"/upload/profilepicture"));
    },
    filename:(req,file,cb)=>{
        const imageExtension=file.mimetype.split("/")[1];
        cb(null,`profile-${Date.now()}.${imageExtension}`);
    }
})

const isImage = (req, file, callback) => {
    if (file.mimetype.startsWith('image')) {
        callback(null, true)
    }
    else {
        callback(new Error('only images allowed'))
    }
}

const upload=multer({

    storage:destination,
    fileFilter:isImage
})


module.exports=upload.single();