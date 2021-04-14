let fs=require('fs');


let obje={
    name:"manan",
    dept:"CE",
    ins:"CSPIT"
}
console.log(obje.name);
let jsondata=JSON.stringify(obje);
console.log(jsondata);
fs.writeFile("json1.json",jsondata,(err)=>{
console.log("done");
});

let i=1;
fs.readFile("json1.json","utf-8",(err,data)=>{
    let orgdata=JSON.parse(data);
    console.log(orgdata);
    console.log(i);
    i++;
 
});
