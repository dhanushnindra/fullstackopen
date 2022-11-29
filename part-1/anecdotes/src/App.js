import {useState} from 'react'

function App() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(7).fill(0))
  const [topVoteIndex, setTopVoteIndex] = useState(0);

  const voteHandler = () => {
    const copy = [...votes]; 
    copy[selected]+=1; 

    if(copy[selected] > votes[topVoteIndex])
      setTopVoteIndex(selected);

    setVotes(copy)
  }

  return (
    <div>
      <h1>RANDOM ANECDOTE</h1>
      <p>{anecdotes[selected]} <br></br>has {votes[selected]} votes</p>
      <br></br>
      <button onClick={()=>setSelected(Math.floor(Math.random() * 7))}>NEXT ANECDOTE</button>
      <button onClick={voteHandler}>VOTE</button>
      
      <br></br>
      <h3>TOP VOTED ANECDOTE</h3>
      <p>{anecdotes[topVoteIndex]}</p>
    </div>
  )
}

export default App;
