import React, { Component } from 'react'

export default class PropClass extends Component {
  render() {
    return (
      <div>
        <h1>I am {this.props.name}</h1>
      </div>

    )
  }
}
