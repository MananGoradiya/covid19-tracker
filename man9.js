let btn=document.getElementById("btn");

function parahide()
{
    let para=document.getElementById("para");
    if(para.style.display!='null')
    {
            para.style.display='null';
    }
    else {
        para.style.display='block';
    }
}

function parahidee()
{
    let para=document.getElementById("para");
    if(para.style.display!='none')
    {
            para.style.display='none';
    }
    else{
        para.style.display='block';
    }
}
let para=document.getElementById("para");
para.addEventListener('mouseover',function paraover() {
    console.log("mouseover called");
})
/*
let x=setInterval(parahidee,1000);
//clearInterval(x);

setTimeout(parahidee,10000);



function settime()
{
    let time=new Date();
    //console.log(time);
    document.getElementById("time").innerHTML=time;
}
setInterval(settime,1000);
*/
/*
let x=()=>{
    console.log("yess boosss");
}
let z=(a,b)=>a+b;
console.log(z);

let m= a=>a/2;
console.log(m); 
let greet=()=>console.log("this is  greeting");
*/
let obj1={
    names:["manan","ayushi","hetang","karan"],
    speak()
    {
    this.names.forEach(element => {    console.log(element); });
     
}
}

obj1.speak();
xyz=[1,2,3,4,5];
xyz.forEach(element => {
    console.log(element);
    
});