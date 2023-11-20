import React, { Component } from 'react'

export default class PropClassbutton extends Component {
    state={
        name:"Skcet",place:"cbe"
    }
  render() {
    return (
      <div>
        <h1>I am studying at {this.state.name} place {this.state.place}</h1>
        <button onClick={()=>{this.setState({name:"Atria"})}}>Click me</button>
      </div>
    )
  }
}
