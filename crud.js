const ex=require('express');
const app=ex();

var arr=[
    {id:1,name:"karan"},
    {id:2,name:"ronak"},
    {id:3,name:"vansh"},
    {id:4,name:"parth"},
    {id:5,name:"harsh"},

];

app.get("/",(req,res)=>{
    res.json(arr);
});
app.get("/:id",(req,res)=>{
    res.json((arr[(req.params.id-1)%arr.length]));
})
app.post("/:name",(req,res)=>{
    var id=arr.length+1;
    var name=req.params.name;
    arr.push({id,name});
    res.json(arr);
})
app.delete("/:id",(req,res)=>{
    arr=arr.filter(item=>item.id!=req.params.id);
    res.json(arr);
})
app.put("/:id/:name",(req,res)=>{
    // arr.find(item=>{
    //     if(item.id==req.params.id){
    //         item.name=req.params.name;
    //     }
    // })
    arr.map(item=>{
        if(item.id==req.params.id){ 
              item.name=req.params.name;
            }
    })
    res.json(arr);
})
app.listen(3000,()=>{console.log("server started:")})