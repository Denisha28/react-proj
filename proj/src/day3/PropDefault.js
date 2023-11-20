import React from 'react'

export default function PropDefault(props) {
  return (
    <div>
        <h1>My name is {props.name} and I am studying at {props.college}</h1>
    </div>
  )
}
PropDefault.defaultProps={college:"SKCET"}

