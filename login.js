console.log("manan manan");
var usernamevalue=document.getElementById("username").value;
console.log(usernamevalue)
console.log("ha bhai ha");
//var passwordvalue=document.getElementById("password").value;
console.log(username);
//let x=document.getElementById("username").value;
let submit=document.getElementById("submit");
submit.addEventListener('click',(e)=>
{
    e.preventDefault();
   // console.log(submit);
   // console.log("manan");
   let username=document.getElementById("username");
   let password=document.getElementById("password");
   username.value="done";
   password.innerText=password.value;
    console.log(username);
    console.log(password);
});
//console.log(submit);