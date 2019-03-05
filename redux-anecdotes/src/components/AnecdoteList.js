import React from 'react'
import { voteObject } from '../reducers/anecdoteReducer'
import { changeNotification } from './../reducers/notificationReducer';

const AnecdoteList = (props) => {
  const anecdotes = props.anecdotes

  const vote = (id) => {
    console.log('vote', id)
    props.store.dispatch(voteObject(id))
    props.store.dispatch(changeNotification(`you voted: '${anecdotes.find(x => x.id === id).content}'`))
  }

  var f = props.store.getState().filter
  if(f === null){ f = "" }


  console.log(f)

  return (
    <>
      {anecdotes.map(anecdote => {
        if (!anecdote.content.toLowerCase().includes(f)){ return null }
        return (
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => vote(anecdote.id)}>vote</button>
            </div>
          </div>
        )
      }
      )}
    </>
  )
}

export default AnecdoteList
