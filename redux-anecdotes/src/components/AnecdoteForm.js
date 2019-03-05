import React from 'react';
import { createObject } from './../reducers/anecdoteReducer';
import { changeNotification } from './../reducers/notificationReducer';

const AnecdoteForm = (props) => {

  const addAnec = (event) => {
    event.preventDefault();
    const c = event.target.anec.value;
    props.store.dispatch(createObject(c));
    props.store.dispatch(changeNotification("created: " + c))
    event.target.anec.values = ""
  }

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={addAnec}>
        <div><input name="anec" /></div>
        <button>create</button>
      </form>
    </>
  )
}

export default AnecdoteForm
