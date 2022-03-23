import React from 'react'
import {connect} from 'react-redux'


const Counter = ({ dispatch}) =>{
    const handleClick = ()=>{
        dispatch({type:'initTest'})
    }

   return <div>
        <button onClick={handleClick}>
          click
        </button>
    </div>
}

export default connect()(Counter)
