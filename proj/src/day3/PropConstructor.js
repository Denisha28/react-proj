import React, { Component } from 'react'

export default class PropConstructor extends Component {
    constructor()
    {
        super();
        this.state={name:"SKCET",place:"CBE"}
    }
    changeCollege()
    {
        this.setState({name:"Atria"})
    }

    render() {
    return (
      <div>
        <h1>I am studying at {this.state.name} place {this.state.place}</h1>
        <button onClick={this.changeCollege.bind(this)}>Click me</button>
      </div>
    )
  }
}
