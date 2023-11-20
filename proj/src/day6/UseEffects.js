import React ,{useEffect, useState } from 'react'

export default function UseEffects() {
//     const[count,setCount]=useState(0);
//     useEffect(()=>{document.title='count ${count}'})
//   return (
//     <div>
//         <h1>Count value {count}</h1>
//         <button onClick={()=>setCount(count+1)}>Click me</button>
//     </div>
//   )

     const[name,setName]=useState("ABC");
     useEffect(()=> {setTimeout (()=> {setName("CDE");},3000)})
     return(
        <div>
            
        </div>
     )

}