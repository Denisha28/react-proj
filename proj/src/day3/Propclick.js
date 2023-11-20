import React,{useState} from 'react'

export default function Propclick() {
    const[college,setcollege]=useState("Skcet")
  return (
    <div>
        <h1>My college is {college}</h1>
        <button onClick={()=>setcollege("Atria")}>click me</button>
    </div>
  )
}
