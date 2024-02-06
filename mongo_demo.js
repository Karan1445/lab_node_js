const express=require("express")
const mongoose=require("mongoose")
const Stu=require("./model/Schema")

mongoose.connect("mongodb://localhost:27017/stu").then(()=>{
    const app=express();

    app.get("/",async(req,res)=>{
        const data=await Stu.find()
        res.json(data)
    });
    
    app.listen(3000)
})