import React, { Component } from 'react'
import './App.css'

import PhoneBookForm from './components/PhoneBookForm'
import InformaitonTable from './components/InformationTable'

class App extends Component {
  state = {
    listings: [],
  }

  updateState(person) {
    this.setState({ listings: [...this.state.listings, person] })
  }

  createListing = event => {
    event.preventDefault()
    let firstName, lastName, phoneNumber, person

    firstName = event.target[0].value
    lastName = event.target[1].value
    phoneNumber = event.target[2].value

    person = {
      firstName,
      lastName,
      phoneNumber,
    }

    this.updateState(person)
  }

  render() {
    return (
      <div className='App'>
        <PhoneBookForm createListing={this.createListing} />
        <InformaitonTable listings={this.state.listings} />
      </div>
    )
  }
}

export default App
