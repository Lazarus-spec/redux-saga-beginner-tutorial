export default function counter(state={} , action) {
    console.log('reducer',action)
    // 可以在这里捕捉 reduces.js 的 action
    switch (action.type) {
        case 'loginSuccess':
            console.log('loginSuccess',action)
            return {}
        default:
            break
    }
    return Object.assign({},state,action)
}
