const ex=require("express");
const body=require("body-parser");
const bodyParser = require("body-parser");
app=ex();

var stu=[ 
    {id:1,name:"karan"},
    {id:2,name:"ronak"},
    {id:3,name:"vansh"},
    {id:4,name:"parth"},
    {id:5,name:"harsh"},
]
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.post("/:id",(req,res)=>{
    res.json(req.body.id);
})

app.get("/add/:name",(req,res)=>{
    const id=stu.length+1;
    const name=req.params.name;
    stu.push({id,name});
    res.json(stu);
})
app.get("/update/:id/:name",(req,res)=>{
    stu.find((item)=>{
        if(item.id==req.params.id){
        item.name=req.params.name;
        
    }})
    res.json(stu);
})
app.get("/del/:id",(req,res)=>{
   stu= stu.filter(item=>item.id!=req.params.id)
    res.json(stu)
})


app.listen(3000,()=>{console.log("server started")});