import React, { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import PersonDisplay from './components/PersonDisplay'

import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const App = () => {
  const [ persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')

  useEffect(() => {
    axios
      .get(baseUrl)
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  const personsToShow = persons.filter(person =>
    person.name.toLowerCase().includes(newFilter.toLowerCase())
  )

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    // TODO: Tarkista data palvelimelta?
    if (persons.some(person => person.name === newName)) {
      window.alert(`${newName} is already included in the phonebook!`)
      return
    }
    // setPersons(persons.concat(personObject))
    // setNewName('')
    // setNewNumber('')

    axios
      .post(baseUrl, personObject)
      .then(response => {
        setPersons(persons.concat(response.data))
        setNewName('')
        setNewNumber('')
      })

  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter text={newFilter} handleChange={handleFilterChange} />
      <h2>Add a new contact</h2>
      <PersonForm nameValue={newName}
                  nameHandler={handleNameChange}
                  numberValue={newNumber}
                  numberHandler={handleNumberChange}
                  submit={addPerson}
      />
      <h2>Numbers</h2>
      <PersonDisplay personsList={personsToShow} />
    </div>
  )

}

export default App