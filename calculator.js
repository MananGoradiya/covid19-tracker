let display=document.getElementById("display");
console.log(display);
console.log("manan");
buttons=document.querySelectorAll('button');
console.log(buttons);
let screenvalue='';
for(item of buttons)
{
    item.addEventListener('click',(e)=>{
        buttontext= e.target.innerText;
        console.log(buttontext+" yooo");
        if(buttontext=="*")
        {
            buttontext='X';
            screenvalue+=buttontext;
            display.value=screenvalue;
            //display.value+=buttontext;
           
        }
        else if(buttontext=="clear")
        {
            screenvalue="";
            display.value=screenvalue;
        }        
        else if(buttontext=="=")
        {
                display.value=eval(screenvalue);
                
        }
        else{
            screenvalue+=buttontext;
            display.value=screenvalue;
        }
    });
}


