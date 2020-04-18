import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <Person name="Daryl" age="25">My Hobbies: Racing</Person>
        <Person name="James" age="28" />
        <Person name="Percy" age="29" />
      </div>
    )
  }
}

export default App;
