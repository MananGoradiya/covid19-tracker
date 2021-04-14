import React from 'react'

function Table({countrues}) {
    return(  <div className="table">
        
         { countrues.map(({country,cases})=>(
             <tr>
                 <td>{country}</td>
                 <td>
                     <strong>{cases}</strong>
                 </td>
             </tr>
         ))

         }   
        </div>
        );
    
}

export default Table
