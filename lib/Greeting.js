import React from 'react';

export default function Greeting(props) {
  return (
    <div>
      <h1>Hello {props.name}!</h1>
      <p>Your {props.compliment} looks great today!</p>
    </div>
  )
}
