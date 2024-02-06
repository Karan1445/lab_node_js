const fs=require('fs')
const http=require('http')

http.createServer((req,res)=>{
   fs.writeFileSync((req.url).replace('/','')+".txt","<h1 style=color:grey;text-align:center;>Welcome to "+(req.url).replace('/','')+" page</h1>");
   res.writeHead(200,{'Content-Type':'text/html'})
   var demo_data='<!doctype html><html lang="en"><head><style></style><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Demo</title><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"></head><body><div class="container"><nav class="navbar navbar-expand-lg navbar-light bg-light sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV"><a class="navbar-brand" href="/home">Karan</a><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarNav"><ul class="navbar-nav"><li class="nav-item active"><a class="nav-link" href="/home">Home <span class="sr-only">(current)</span></a></li><li class="nav-item"><a class="nav-link" href="/contact">Contact</a></li><li class="nav-item"><a class="nav-link" href="/about">About us</a></li></ul></div></nav></div><script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script></body></html>';
   res.write(demo_data);
   var res_file_name=((req.url).replace('/','')+".txt");

   if(req.url==='/home' && req.method==='GET'){
    res.write(fs.readFileSync(res_file_name,'utf-8'));
    res.end();
   }
   else if(req.url==='/contact' && req.method==='GET'){
    res.write(fs.readFileSync(res_file_name,'utf-8'));
    res.end();
   }
   else if(req.url==='/about' && req.method==='GET'){
    res.write(fs.readFileSync(res_file_name,'utf-8'));
    res.end();
   }
   else if(req.url==='/' && req.method==='GET'){
    res.write(fs.readFileSync(res_file_name,'utf-8'));
    res.end();
   }
   else{
    res.write("<h1 style=color:red;text-align:center;>:Not Valid File Name:</h1>");
    fs.unlink(res_file_name,()=>{
        res.write("<h3 style=color:green;text-align:center;>:Invalid File Is Deleted:</h3>")
    })
        res.write("<h3 style=color:green;text-align:center;>:Invalid File Is Deleted:</h3>")
   
   }
   res.end();

}).listen(1445,()=>{});