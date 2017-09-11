import React, { Component } from 'react';

export default class EvilDeedsCounter extends Component {
  constructor () {
    super();
    this.state = {
      count: 0
    }
  }

  render () {
    return (
      <div>
        <h2>Number of Evil Deeds:</h2>
        <span> {this.state.count} </span>
        <button onClick={() => {
          this.setState({ count: ++this.state.count })
        }} >
          +1
        </button>
      </div>
    )
  }
}
