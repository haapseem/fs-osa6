import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import App from './App'
import reducer from './reducers/anecdoteReducer'
import nreducer from './reducers/notificationReducer'
import freducer from './reducers/filterReducer'

const store = createStore(combineReducers({
  filter: freducer,
  notification: nreducer,
  anecdote: reducer
}))

const render = () => {
  ReactDOM.render(
    <App store={store} />,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)
