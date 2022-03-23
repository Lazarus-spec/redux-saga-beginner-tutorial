import "@babel/polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import Counter from './Counter'
import reducer from './reducers'

import { helloSaga } from './sagas'

//创建一个 Saga middleware 和要运行的 Sagas（目前我们只有一个 helloSaga）
// 将这个 Saga middleware 连接至 Redux store.
const store = createStore(reducer,applyMiddleware(createSagaMiddleware(helloSaga)))

const action = type => store.dispatch({type})

function render() {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => action('INCREMENT')}
      onDecrement={() => action('DECREMENT')}
      onIncrementAsync={() => action('INCREMENT_ASYNC')}
    />,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)
