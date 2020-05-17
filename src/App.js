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
        name: 'James',
        age: 28
      },
      {
        name: 'Percy',
        age: 29
      },
    ],
    otherState: 'some value'
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {
          name: 'Daryl',
          age: 25
        },
        {
          name: newName,
          age: 28
        },
        {
          name: 'Percy',
          age: 30
        }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
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
          name: event.target.value,
          age: 30
        }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={() => this.switchNameHandler('Herold')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        >My Hobbies: Racing</Person>
        <Person
          name={this.state.persons[1].name}
          age={ this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Thomas')}
          changed={this.nameChangedHandler}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    )
  }
}

export default App;
