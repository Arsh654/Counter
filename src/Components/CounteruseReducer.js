import React,{useReducer} from 'react'

const initialState = 0
const reducer = (currentState, action) =>{
    switch(action){
        case 'incre':
            return currentState+1
        case 'decre':
            if(currentState>0){

                return currentState-1
            }
        case 'reset':
            return currentState=0
        default:
            return currentState
    }
}

function CounteruseReducer() {

    const[newCount, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
        <div>Counter Stands at- {newCount}</div>
        <button onClick={()=>dispatch('incre')}>Increment +</button>
        <button onClick={()=>dispatch('decre')}>Decrement -</button>
        <button onClick={()=>dispatch('reset')}>Reset</button>
    </div>
  )
}

export default CounteruseReducer