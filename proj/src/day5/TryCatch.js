import React from 'react'

export default function TryCatch(props) {
    try{
        if(props.name=="Ajay")
        {
            throw new Error("Ajay name is not accepted");
        }
    }
    catch(error)
    {
        console.log(error);
        document.write("Please enter correct name");
    }
  return (
    <div>{props.name}</div>
  )
}
