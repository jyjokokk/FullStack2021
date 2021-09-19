import React from 'react'
import Person from './Person'

const PersonDisplay = ({ personsList, handleClick }) => {
  return (
    <div>
      {personsList.map((person) =>
        <Person key={person.id} person={person} handleClick={handleClick} />
      )}
    </div>
  )
}

export default PersonDisplay