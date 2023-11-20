import React, { Component } from 'react'

export default class Propcount extends Component {
    state={
        count:0,
        };
    handleIncrement=() =>{
        this.setState({count:this.state.count+1});
    }
  render() {
    return (
      <div>
        <p>Count:"{this.state.count}</p>
        <button onMouseOver={this.handleIncrement}>Increment</button>
      </div>
    )
  }
}
