import React, { Component } from 'react'

export default class PropText extends Component {
    state={name:""}
    handleChange=(event)=>{this.setState({name:event.target.value})}
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <input type="text" value={this.state.name} onChange={this.handleChange}/>
      </div>
    )
  }
}
