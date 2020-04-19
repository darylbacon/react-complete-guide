import React, { useState } from 'react'
import './App.css'
import Person from './Person/Person'

const app = () => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      {
        name: 'Daryl',
        age: 25
      },
      {
        name: 'James',
        age: 28
      },
      {
        name: 'Percy',
        age: 29
      },
    ]
  })

  const [ otherState, setOtherState] = useState('some value')

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        {
          name: 'Daryl',
          age: 25
        },
        {
          name: 'Gordon',
          age: 28
        },
        {
          name: 'Percy',
          age: 30
        }
      ]
    })
  }

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button onClick={ switchNameHandler }>Switch Name</button>
      <Person name={ personsState.persons[0].name } age={ personsState.persons[0].age }>My Hobbies: Racing</Person>
      <Person name={ personsState.persons[1].name } age={ personsState.persons[1].age } />
      <Person name={ personsState.persons[2].name } age={ personsState.persons[2].age } />
    </div>
  )
}

export default app;
