import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
//创建一个 Saga middleware 和要运行的 Sagas（目前我们只有一个 helloSaga）
// 将这个 Saga middleware 连接至 Redux store.
const store = createStore(reducer,{},applyMiddleware(sagaMiddleware))

// 执行一下 saga
sagaMiddleware.run(rootSaga)

export default store;
