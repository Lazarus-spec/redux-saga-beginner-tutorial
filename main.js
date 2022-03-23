import "@babel/polyfill"
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import store from './store'
import Counter from './Counter'

function render() {
  ReactDOM.render(
      <Provider store={store}>
        <Counter/>
      </Provider>,
    document.getElementById('root')
  )
}

render()
