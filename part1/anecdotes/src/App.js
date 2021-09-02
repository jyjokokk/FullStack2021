import React, { useState } from 'react';

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  );
};

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  const indexOfHighestVotes = votes.indexOf(Math.max(...votes));

  const handleSelected = () => {
    const num = Math.floor(Math.random() * anecdotes.length);
    setSelected(num);
  };

  const handleVote = () => {
    const newVotes = [...votes];
    newVotes[selected]++;
    setVotes(newVotes);
  };

  return (
    <div>
      <div>
        <h1>Anecdote of the day</h1>
        <p>{anecdotes[selected]}</p>
        <p>has {votes[selected]} votes</p>
        <Button handleClick={handleSelected} text="Next anecdote" />
        <Button handleClick={handleVote} text="Vote" />
      </div>
      <div>
        <h2>Anecdote with the most votes</h2>
        <p>{anecdotes[indexOfHighestVotes]}</p>
        <p>Has {votes[indexOfHighestVotes]} votes.</p>
      </div>
    </div>
  );
};

export default App;