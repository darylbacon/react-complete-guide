import React, { Component } from 'react'

import classes from './App.css'
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {
        id: '1234',
        name: 'Daryl',
        age: 25
      },
      {
        id: '12345',
        name: 'James',
        age: 28
      },
      {
        id: '123456',
        name: 'Percy',
        age: 29
      },
    ],
    otherState: 'some value',
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]

    persons.splice(personIndex, 1)
    this.setState({
      persons: persons
    })
  }

  nameChangedHandler = (event, personId) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === personId
    })
    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value

    const persons = [...this.state.persons]

    persons[personIndex] = person

    this.setState({
      persons: persons
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({
      showPersons: !doesShow
    })
  }

  render() {
    let btnClass = ''
    let persons = null

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={person.id}
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                changed={(event) => this.nameChangedHandler(event, person.id)}>
              </Person>
            )
          })}
        </div>
      )

      btnClass = classes.Red
    }

    const assignedClasses = []

    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red)
    }

    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold)
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button className={btnClass}
          alt={this.state.showPersons}
          onClick={this.togglePersonsHandler}>
            Toggle Persons
        </button>
        {persons}
      </div>
    )
  }
}

export default App;
