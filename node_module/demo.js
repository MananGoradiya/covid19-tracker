/*
let obj={
    name:"manan",
    clg:"cspit",
    id:"19ce032"
}

function obj(givenname)
{
this.name=givenname;

}
let obj2=new obj("jugal");
console.log(obj2);

*/

/*



// Object literal : Object.prototype
let obj = {
    name: "harry",
    channel: "Code With Harry",
    address: "Mars",
    
}

function Obj(givenName){
    this.name = givenName
    this.address="home";
}

/*
Obj.prototype.getName = function (){
    return this.name;
}

Obj.prototype.setName = function (newName){
  this.name = newName;
}




//console.log(obj);
let obj2 = new Obj("Rohan Das");
console.log(obj2);
 */

let userone={
name:"manan",
id:"32",
login()
{
    console.log(this);
}
}

console.log(typeof(userone));
userone.login();    
//console.log(this);
class maanan{

}
console.log(typeof(maanan));