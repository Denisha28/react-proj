//AxiosGet.js
import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function AxiosGet() {
    const[person, setPerson]=useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>{
            const store=res.data;
            setPerson(store);
        })
    })
  return (
    <div>
      <ul>
        {
            person.map(displayName=><li key={displayName.id}>{displayName.email}</li>)
        }
      </ul>
    </div>
  )
}