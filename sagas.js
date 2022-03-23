export function* helloSaga() {
    console.log('Hello Sagas!');
}

// 负责启动其他的sagas函数
export default function* rootSaga() {
    yield helloSaga()
}