import React, { Component } from 'react';

export default class EvilDeedsJournal extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      toDo: ['poison a bunch of apples']
    }
  }

  render() {
    console.log(this.state.value)
    return (
      <div>
        <h2>Evil To Do List</h2>
        <input value={this.state.value}
               onChange={(event) => this.setState({ value: event.target.value })}/>
        <button onClick={() => {
          const updatedToDoList = this.state.toDo;
          updatedToDoList.push(this.state.value);
          this.setState({ toDo: updatedToDoList, value: '' })
        }}>
          SUBMIT
        </button>
        <ul>
          {
            this.state.toDo.map((toDo, index) => {
              return <li key={index}>{toDo}</li>
            })
          }
        </ul>
      </div>
    )
  }
}
