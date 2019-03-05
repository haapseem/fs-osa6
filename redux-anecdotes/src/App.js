import React from 'react';
import AnecdoteForm from './components/AnecdoteForm';
import AnecdoteList from './components/AnecdoteList';
import Notification from './components/Notification';
import Filter from './components/Filter.js';

const App = (props) => {
  const anecdotes = props.store.getState().anecdote

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification store={props.store} />
      <Filter store={props.store} />
      <AnecdoteList anecdotes={anecdotes} store={props.store}  />
      <AnecdoteForm store={props.store} />
    </div>
  )
}

export default App
