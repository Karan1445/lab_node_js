const express=require("express");
const app=express();
// const app=express();
const users=require("./users")

app.use("/admin",users,(req,res)=>{
    console.log(req.ip)
})
app.listen(3000,()=>{
    console.log("This is Port 3000")
})
