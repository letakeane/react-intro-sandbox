import React from 'react';
import Greeting from './Greeting.js';
import EvilDeedsCounter from './EvilDeedsCounter.js';
import EvilDeedsJournal from './EvilDeedsJournal.js';

const villains = ['Ursula']

export default function App () {
  return (
    <div>
      {
        villains.map((villainName, index) => {
          return <Greeting key={index} name={villainName} />
        })
      }
      <EvilDeedsCounter />
      <EvilDeedsJournal />
    </div>
  )
}
