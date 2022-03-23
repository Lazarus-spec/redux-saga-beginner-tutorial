import {takeEvery,takeLatest,throttle} from 'redux-saga/effects'

// 负责启动其他的sagas函数
export default function* rootSaga() {
    // 三个辅助函数都是监听action的，只要action触发就会被监听到
    yield takeEvery('takeEvery',function *() {
        console.log('takeEvery')
    })
    //
    yield takeLatest('takeLatest',function *() {
        console.log('takeLatest')
    })
    // 节流调用
    yield throttle(0,'throttle',function *() {
        console.log('throttle')
    })
}