let http=require("http");
let server=http.createServer((req,res)=>
{
    console.log(req.url);
   // res.end("heyyy you are here");
    if(req.url=="/home")
    {
        res.end("you are in home page");
    }
    else if(req.url=="/aayushi")
    {
        res.end("hii aaysuhi");
    }
    else if(req.url=="/aboutus")
    {
        res.writeHead("hii maa boo");
        res.end("<table > <tr> <th>Firstname</th> <th>Lastname</th> <th>Age</th> </tr> <tr> <td>Jill</td> <td>Smith</td> <td>50</td> </tr> <tr> <td>Eve</td> <td>Jackson</td> <td>94</td> </tr> </table>");
    }
   
});

server.listen(8000,"127.0.0.6",()=>{
    console.log(" hii birooo");
});

