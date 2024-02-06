const express=require("express");
const bodyParser=require("body-parser");
const mongoose=require("mongoose");
const schema=require("./model/s");
mongoose.connect("mongodb://localhost:27017/stu").then(()=>{
    const app=express();
    app.use(bodyParser.urlencoded())
    app.get("/",async(req,res)=>{
        const data=await schema.find()
        res.send(data);
    });
    app.get("/:id",async(req,res)=>{
        const data=await schema.findOne({enr:req.params.id})
        res.json(data);
    });
    app.delete("/:id",async(req,res)=>{
        const data=await schema.deleteOne({enr:req.params.id})
        res.json(data)
    })
    app.patch("/:id",async(req,res)=>{
        await schema.findOneAndUpdate({enr:req.params.id},req.body);
        const data1=await schema.findOne({enr:req.params.id})
        res.json(data1);
    })
    app.post("/",async(req,res)=>{ 
        const sche=new schema(req.body);
        const ress=sche.save();
        res.json(ress)                   
    });
    app.listen(3000,()=>{
        console.log
    })
})