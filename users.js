const express=require("express")
const router=express.Router();

router.get("/",(req,res)=>{
    res.send("Hello user");
    next()
})
router.get("/name",(req,res)=>{
    res.send("Hello nammemr")
})

module.exports=router;