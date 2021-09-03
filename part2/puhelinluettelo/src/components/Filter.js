import React from 'react'

const Filter = ({ text, handleChange }) => {
  return (
    <form>
      Filter shown contacts <input value={text} onChange={handleChange} />
    </form>
  )
}

export default Filter