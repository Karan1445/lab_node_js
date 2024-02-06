const {exec}=require("child_process");

exec("node ./index.js",(err,o)=>{
    console.log(err);
    console.log(o)
})