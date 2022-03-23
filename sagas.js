import {takeEvery,takeLatest,throttle,select} from 'redux-saga/effects'

// 负责启动其他的sagas函数
export default function* rootSaga() {
    // 三个辅助函数都是监听action的，只要action触发就会被监听到
    yield takeEvery('takeEvery',function *() {
        // reducer 先执行，saga获取其值，之后处理生成新的store
        // select 可以拿到当前 state
        const state = yield select()
        console.log('takeEvery',state)
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