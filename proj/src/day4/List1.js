import React from 'react'
function Demo(props)
{
    return(
        <>
        <h1>My name is {props.name}</h1>
        </>
    )
}
export default function List1()
 {
    const list=["mango","apple","orange"];
  return(
    <div>
        {list.map(
            (item)=>
            <Demo name={item}></Demo>
            )
        }
    </div>
  )
}
