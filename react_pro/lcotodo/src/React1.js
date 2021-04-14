import React,{useState} from 'react';
import ReactDom from 'react-dom';

function React1()
{
    //const x=1;
    const [init,setinit]=useState(0);


const updatee=()=>
{
    console.log("yess");
    setinit(window.screen.height);
}
    return(
           <>
           <textarea onChange={updatee} value={init}>{init}</textarea>
           
           <button onClick={updatee}>click{init}</button>
           </>
    )
}

export default React1;