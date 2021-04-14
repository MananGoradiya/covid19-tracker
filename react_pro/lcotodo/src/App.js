import React from 'react';
import ReactDOM from 'react-dom';
import React1 from './React1';


let currTime=new Date().getHours;
let greetings;
console.log(currTime);
if(currTime>18)
{
  greetings="good night";
}
else
{
  greetings="have a great day";
}

function App()
{
  return(
    <>
    
    <React1></React1>
    </>
  );

}
export default App;