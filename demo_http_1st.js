const http=require('http')

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'})
    var demo_data='<!doctype html><html lang="en"><head><style></style><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Demo</title><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"></head><body><div class="container"><nav class="navbar navbar-expand-lg navbar-light bg-light sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV"><a class="navbar-brand" href="/home">Karan</a><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarNav"><ul class="navbar-nav"><li class="nav-item active"><a class="nav-link" href="/home">Home <span class="sr-only">(current)</span></a></li><li class="nav-item"><a class="nav-link" href="/contact">Contact</a></li><li class="nav-item"><a class="nav-link" href="/about">About us</a></li></ul></div></nav></div><script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script></body></html>';
    res.write(demo_data);
    if(req.url==='/home'){
        res.write("<html><head><title>Demo</title></head><body><h1>Home</h1></body></html>");
        res.end();
    }
    else if(req.url==='/contact'){
        res.write('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Contact Us</title><style>body{font-family:Arial,sans-serif;background-color:#f4f4f4;margin:0;padding:0}.ccontainer{max-width:600px;margin:50px auto;background-color:#fff;padding:20px;border-radius:5px;box-shadow:0 0 10px rgba(0,0,0,.1)}h1{text-align:center;color:#333}label{display:block;margin-bottom:8px;color:#555}input,textarea{width:100%;padding:10px;margin-bottom:15px;border:1px solid #ccc;border-radius:4px;box-sizing:border-box}textarea{resize:vertical}button{background-color:#4caf50;color:#fff;padding:12px 20px;border:none;border-radius:4px;cursor:pointer}button:hover{background-color:#45a049}</style></head><body><div class="ccontainer"><h1>Contact Us</h1><label for="name">Name:</label><input type="text" id="name" name="name" required><label for="email">Email:</label><input type="email" id="email" name="email" required><label for="message">Message:</label><textarea id="message" name="message" rows="4" required></textarea><button type="submit">Submit</button></div></body></html>');
        res.end();
    }
    else if(req.url==='/about'){
        res.write('<html><head><title>Demo</title></head><body><h1>About us</h1></body></html>');
        res.end();
    }

}).listen(1445);