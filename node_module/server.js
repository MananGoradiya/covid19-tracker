let http=require("http");
let fs=require('fs');
let server=http.createServer((req,res)=>
{
    console.log(req.url);
    if(req.url=='/home')
    {
            res.end("heeyyy biroo,you are in the home page");
    }
    else if(req.url=='/aboutus')
    {

           let d=fs.readFile("api.json","utf-8",(err ,data)=>
            {
                  console.log(d);
            });
            
           
            
    }
    else if(req.url=='/help')
    {
            res.end('help page here');
    }
    else {
        res.end('404 page not found');
    }
   // res.end("present biroooo");
});

server.listen(1000,"127.0.0.1",()=>
{
    console.log("ha bhai sambhadu chuuu");
});
