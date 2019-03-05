import React from 'react';
import {changeFilter} from './../reducers/filterReducer';

const Filter = (props) => {

  const change = (event) => {
    event.preventDefault();
    props.store.dispatch(changeFilter(event.target.value))
  }

  return (
    <>
      filter: <input onChange={change} />
    </>
  )
}

export default Filter
