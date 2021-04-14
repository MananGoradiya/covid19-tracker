console.log("manabsdkn");
    
function createuser(email,password)
{
   firebase.auth().createUserWithEmailAndPassword(email, password)
   .then((userCredential) => {
     // Signed in 
     var user = userCredential.user;

     console.log("manamanan");
     // ...
   })
   .catch((error) => {

    console.log(error.code);
     var errorCode = error.code;
     var errorMessage = error.message;
     // ..
   });

  }




  function registeruser(e)
  {
    console.log("lodu");
    e.preventDefault();
      var email=document.getElementById('email').value;
      var password=document.getElementById('password').value;
      var confirm_password=document.getElementById('confirm_password').value;
  console.log("aayushi");
  this.createuser(email,password);
  }

    
    console.log("yess boss 2222");
  
window.onload=function(){
    document.getElementById("submit").addEventListener("click",(e)=>{
        e.preventDefault();
        console.log("yess boss");

        var email=document.getElementById('email').value;
      var password=document.getElementById('password').value;
      var confirm_password=document.getElementById('confirm_password').value;
  console.log("aayushi");
      
        //this.go(email);
    tihs.registeruser(e);
    
    
});

}






