# redux-saga-beginner-tutorial

### store.js 里面做的事情
 - store 中初始化saga
 - 把现有 reducer和saga关联起来
 - 把saga的拦截文件注入并初始化拦截函数 rootSaga

### Counter.js做的事情
- 点击按钮传入type，dispatch调取相应的reducers.js
- reducers.js 对数据处理，返回数据
- saga.js捕捉数据并拦截对应的type


### redux-saga/effects副作用函数
- 拦截reducer：
    - takeEvery 发起dispatch到store，每经过一次action，saga会处理一次
    - takeLatest 多个action都在运行中，saga只处理拦截最后一次action
    - throttle 节流阀，保留最近的一个，暂停ms内派生新的任务
- 选取reducer返回的state的数据：select
- 调取异步请求，获取异步数据：
    - call 发送远程请求
    - take 拦截
     - put 用来发送action的，可以被reducers.js捕捉
- 组合器： all
```js
    yield all([loginSaga().listSage()])
```
 
 
 
 