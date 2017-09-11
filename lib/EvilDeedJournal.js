import React, { Component } from 'react';

export default class EvilDeedJournal extends Component {
  constructor() {
    super()
    this.state = {
      value: '',
      deeds: []
    }
  }

  render() {
    return (
      <div>
        <h2>Evil Deed Journal</h2>
        <p>Muahahahaha</p>
        <input type='text'
                placeholder='Evil deed goes here'
                value={this.state.value}
                onChange={(event) => {
                  // console.log('event', event.target.value);
                  this.setState({ value: event.target.value })
        }}></input>
        <button onClick={() => {
          // get value from input and set it in state
          let updatedDeeds = [...this.state.deeds];
          updatedDeeds.push(this.state.value);
          this.setState({ deeds: updatedDeeds, value: '' })
        }}  >Add</button>
        <ul>
          {
            this.state.deeds.map(deed => {
              return <li>{deed}</li>
            })
          }
        </ul>
      </div>
    )
  }
}
