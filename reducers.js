export default function counter(state={} , action) {
    console.log('reducer',action)
    switch (action.type) {
        case 'takeEvery':
            return {
                ...state,
                ...action.user
            }
        default:
            return state
    }
}
