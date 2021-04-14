



var firebase = require('firebase');//<!-- The core Firebase JS SDK is always required and must be listed first -->







    
  // Your web app's Firebase configuration
  

    function registeruser(e)
    {
      e.preventDefault();
        var email=document.getElementById('email').value;
        var password=document.getElementById('psw').value;
        console.log("yess boss 2222");
        /*
        firebase.auth().createUserWithEmailAndPassword(email,password).then(function(){
            alert('User Registered Successfully');

        }).catch(function(error){
            var err=error.code;
            var errormsg=error.message;
        });
        */

       firebase.auth().createUserWithEmailAndPassword(email, password)
       .then((userCredential) => {
         // Signed in 
         var user = userCredential.user;
         // ...
       })
       .catch((error) => {
         var errorCode = error.code;
         var errorMessage = error.message;
         // ..
       });
    }


    window.onload=function(){
        document.getElementById("register").addEventListener("click",(e)=>{
       this.registeruser(e);
        e.preventDefault();
        console.log("yess boss");
    });
  
}

    


