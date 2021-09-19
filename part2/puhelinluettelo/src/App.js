import React, { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import PersonDisplay from './components/PersonDisplay'
import personsService from './services/persons'


const App = () => {
  const [ persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')

  useEffect(() => {
    personsService
      .getAll()
      .then(returnedPersons => {
        setPersons(returnedPersons)
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

  const deletePerson = (id) => {
    const target = persons.find(person => person.id === id)
    if (window.confirm(`Are you sure you want to delete ${target.name}?`)) {
      personsService.deleteItem(id)
      setPersons(persons.filter(person => person.id !== id))
    }
  }

  const updatePerson = (id, newPerson) => {
    personsService.update(id, newPerson)
      .then(returnedPerson => {
        setPersons(persons.map(person => person.id !== id ? person : returnedPerson))
      })
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
    if (persons.some(person => person.name === newName)) {
      if (window.confirm(`${newName} is already included in the phonebook. Would you like to update their number?`)) {
        const targetId = persons.find(person => person.name === newName)
        updatePerson(targetId.id, personObject)
        return
      }
      return
    }
    personsService
      .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
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
      <PersonDisplay personsList={personsToShow} handleClick={deletePerson} />
    </div>
  )

}

export default App