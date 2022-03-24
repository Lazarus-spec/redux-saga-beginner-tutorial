import {takeEvery,takeLatest,throttle,select,call,take,put} from 'redux-saga/effects'

// 负责启动其他的sagas函数
export default function* rootSaga() {
    // 三个辅助函数都是监听action的，只要action触发就会被监听到
    yield takeEvery('takeEvery',function *() {
        // reducer 先执行，saga获取其值，之后处理生成新的store
        // select 可以拿到当前 state
        const state = yield select(state=>state.user)
        /**
         * 这里进行数据请求 call来进行异步数据请求*/
        // const res = yield call(axios.post,'http://XXXXXX',{...user})
        const res = {data:'lanziwen'}
        // 发送一个action给reducers.js
        yield put({
            type:'loginSuccess',
            ...res
        })
    })
    yield takeLatest('takeLatest',function *() {
        console.log('takeLatest')
    })
    yield throttle(2000,'throttle',function *() {
        console.log('throttle')
    })

    // yield take('take')  拦截
}