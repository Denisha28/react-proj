import React from 'react'

export default function PropParent() {
  return (
    <div>
        <Child name="Denisha"></Child>
    </div>
  )
}
function Child (props)
{
    return(
        <div>
            <h1>My name is {props.name}</h1>
        </div>
    )
}
