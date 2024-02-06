const express=require("express");
const mongoose=require("mongoose");
const schema=require("./model/Schema");
const bodyParser = require("body-parser");

mongoose.connect("mongodb://localhost:27017/stu").then(()=>{
    const app=express();
    
    app.use(bodyParser.urlencoded());
    app.get("/",async(req,res)=>{
        const data=await schema.find();
        res.json(data);
    });
    app.get("/:id",async(req,res)=>{
        const data=await schema.findOne({enr : req.params.id});
        res.json(data)
    })
    app.delete("/:id",async(req,res)=>{
        const data=await schema.deleteOne({enr : req.params.id});
        res.json(data);
    })
    app.patch("/:id",async(req,res)=>{
        const data=await schema.findOneAndUpdate({enr:req.params.id},req.body);
        res.json(data);
    });
    app.post("/",async(req,res)=>{
       const schem=new schema(req.body);
       const ress=await schem.save();
       res.json(ress)
    })
    app.listen(3000)
})