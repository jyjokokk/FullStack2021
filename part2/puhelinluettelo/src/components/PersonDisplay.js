import React from 'react'
import Person from './Person'

const PersonDisplay = ({ personsList }) => {
  return (
    <div>
      {personsList.map((person) =>
        <Person key={person.id} person={person} />
      )}
    </div>
  )
}

export default PersonDisplay