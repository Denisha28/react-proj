import React, { Component } from 'react'

export default class PropClassstate extends Component {
    state={name:"SKCET",
    place:"CBE"
}
  render() {
    return (
      <div>
        <h1>I am studying at {this.state.name} place {this.state.place}</h1>
      </div>
    )
  }
}
