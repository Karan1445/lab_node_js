const express = require("express");
const app = express();
const body = require("body-parser");
app.use(body.urlencoded({ extended: false }));


var data =[];

app.use("/add", midd, (req, res) => {
    const ip = req.ip;
    const id = req.body.id;
    const name = req.body.name;

    
    
    data.push({ id, name, ip });
    res.json(data);


})
 
app.use("/remove",midd,(req,res)=>{
    data=data.filter(item=>item.id!=req.body.id);
    res.json(data);
})

app.use("/update",midd,(req,res)=>{
    data.find(item=>{
        if(item.id==req.body.id){
            item.name=req.body.name;
        }
        res.json(data);
    })
})
app.use("/dis",midd,(req,res)=>{
    res.json(data);
})
app.listen(3000, console.log("Server Started"));

function midd(req, res, next) {
    var id = data.length;
    if (id > -1) {
        next()
    }
    else {
        res.send("not today brother")
    }
}

