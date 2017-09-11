import React from 'react';
import Greeting from './Greeting';
import EvilDeedsCounter from './EvilDeedsCounter';

export default function App() {
  let villains = [{name: 'Ursula', compliment: 'hair'}]

  return (
    <div className='App'>
      {
        villains.map( (villain) => {
          return <Greeting name={villain.name} compliment={villain.compliment} />
        })
      }
      <EvilDeedsCounter />
    </div>
  )
}
