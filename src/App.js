import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {
        name: 'Daryl',
        age: 25
      },
      {
        name: 'Jame',
        age: 28
      },
      {
        name: 'Percy',
        age: 29
      },
    ]
  }

  switchNameHandler = () => {
    // Do something when button is clicked
    console.log('was clicked')
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={ this.switchNameHandler }>Switch Name</button>
        <Person name={ this.state.persons[0].name } age={ this.state.persons[0].age }>My Hobbies: Racing</Person>
        <Person name={ this.state.persons[1].name } age={ this.state.persons[1].age } />
        <Person name={ this.state.persons[2].name } age={ this.state.persons[2].age } />
      </div>
    )
  }
}

export default App;
