const mongoose=require("mongoose");
const schema=mongoose.Schema({
    enr:Number,
    name:String
})
module.exports=mongoose.model("stu",schema);