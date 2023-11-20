import React,{useState} from 'react'

export default function UseState() {
    const[student,setStudent]=useState({age:18, name:"Denisha"})
  return (
    <div>
       <h1> {student.age} {student.name}</h1>
        </div>
  )
}
