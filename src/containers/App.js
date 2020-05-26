import React, { Component } from 'react'

import classes from './App.css'
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

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
    let persons = null

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      )
    }

    return (
      <div className={classes.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
    )
  }
}

export default App;