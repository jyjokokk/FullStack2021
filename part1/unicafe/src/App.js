import React, { useState } from 'react'

const Button = ({ handleClick, text }) => {
  return (
      <button onClick={handleClick}>
        {text}
      </button>
  )
}

const StatisticLine = ({ value, text }) => {
  return (
    <div>
      {text} {value}
    </div>
  )
}

const Statistics = ({ bad, neutral, good }) => {
  const all = bad + neutral + good
  if (all === 0) {
    return (
      <div>No feedback given</div>
    )
  }
  const average = (((bad * -1) + (neutral * 0) + (good * 1)) / all).toFixed(1)
  const positive = `${(good / all * 100).toFixed(1)} %`
  return (
    <div>
      <StatisticLine value={bad} text="Bad" />
      <StatisticLine value={neutral} text="Neutral" />
      <StatisticLine value={good} text="Good" />
      <StatisticLine value={all} text="All" />
      <StatisticLine value={average} text="Average" />
      <StatisticLine value={positive} text="Positive" />
    </div>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1)
  const handleNeutral = () => setNeutral(neutral + 1)
  const handleBad = () => setBad(bad + 1)

  return (
    <div>
      <h2>Give feedback</h2>
      <Button handleClick={handleBad} text="Bad" />
      <Button handleClick={handleNeutral} text="Neutral" />
      <Button handleClick={handleGood} text="Good" />
      <h2>Statistics</h2>
      <Statistics bad={bad} neutral={neutral} good={good} />

    </div>
  )
}

export default App