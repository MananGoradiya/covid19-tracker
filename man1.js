console.log("hii google");
let x=[1,2,3,"stringgg"];
console.log(x.length);
/*
for(let i=0;i<=x.length;i++)
{
    console.log(`${x[i]}  and its type is ${typeof(x)} index is ${i}`);
}

x.forEach(element => {
   console.log(element); 
});
function print()
{
   
    console.log("yoo guys");    
   // return (typeof(print));
}
console.log((typeof(print())));
//console.log(man);
*/

console.log("ppppp");
let obj={
 name:"manan",   
 crush:"aayushi",
  game:function manan()
 {
     let sum=2+2;
     return sum;
 }
}
console.log(obj.crush,obj.game());

arr=[1,2,3,4,5,6];
arr.forEach(function(element,x,z){
console.log(element,x,z);
});

arr.forEach(function(element,index,arra)
{
 console.log(element,index,arra);
});
