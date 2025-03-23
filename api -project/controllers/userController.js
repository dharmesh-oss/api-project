const User = require("../models/userModel");

module.exports.create=async(req,res)=>{
    try {
        console.log(req.body);
        
        await User.create(req.body);
       return res.json({message:"user Created Successfully!"});
    } catch (error) {
        return res.json({message:error.message});
        
    }
};
module.exports.view=async(req,res)=>{
    try {
        let data=await User.find({});
        return res.json(data);
        
    } catch (error) {
        return res.json({message:error.message});
    }
}
module.exports.deleteUser=async(req,res)=>{
    try {
        let {id}=req.params;
        await User.findByIdAndDelete(id);
        return res.json("User Deleted successfully!!")
    } catch (error) {
        return res.json({message:error.message});
    }
}
module.exports.update=async(req,res)=>{
    try {
        let {id}=req.params;
          await User.findByIdAndUpdate(id,req.body);
         return res.json({"User Updated Successfully!":id});
    } catch (error) {
        return res.json({message:error.message});
    }
}