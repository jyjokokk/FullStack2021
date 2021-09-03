import React from 'react'

const PersonForm = ({ nameValue, nameHandler, numberValue, numberHandler, submit }) => {
  return (
      <form onSubmit={submit}>
        <div>
          name: <input
                  value={nameValue}
                  onChange={nameHandler}
                />
        </div>
        <div>
          number: <input
                    value={numberValue}
                    onChange={numberHandler}
                  />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
}

export default PersonForm