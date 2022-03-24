import React from 'react'
import {connect} from 'react-redux'

const Counter = ({dispatch}) =>{
    const handleEvery = ()=>{
        dispatch({type:'takeEvery',user:{name:'lanziwen',pwd:'123'},data:{name:"hqins"}})
    }
    const handleLatest = ()=>{
        dispatch({type:'takeLatest',user:{name:'lanziwen',pwd:'123'}})
    }
    const handleThrottle = ()=>{
        dispatch({type:'throttle',user:{name:'lanziwen',pwd:'123'}})
    }

   return <div>
        <button onClick={handleEvery}>click1</button>
        <button onClick={handleLatest}>click2</button>
        <button onClick={handleThrottle}>click3</button>
    </div>
}

export default connect()(Counter)
