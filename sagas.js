import { delay } from 'redux-saga'
import { put, takeEvery } from 'redux-saga/effects'

export function* helloSaga() {
    console.log('Hello Sagas!');
}

//incrementAsync Saga 通过 delay(1000) 延迟了 1 秒钟，然后 dispatch 一个叫 INCREMENT 的 action
export function* incrementAsync() {
    yield delay(1000)
    yield put({ type: 'INCREMENT' })
}

export function* watchIncrementAsync() {
    //redux-saga 提供的辅助函数 takeEvery，用于监听所有的 INCREMENT_ASYNC action，
    // 并在 action 被匹配时执行 incrementAsync 任务
    yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}