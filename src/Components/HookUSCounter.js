import React,{useState} from 'react'

function HookUSCounter() {
    const[count, setCount]=useState(0)

    const handleDecrement = ()=>{
        if(count>0){
            setCount(prevCount => prevCount-1)
        }
    }

   const handleIncrement= () =>{
        setCount(prevCount => prevCount+1)
    }

  return (
    <div>
        <div>
        <h1>Count stands at {count}</h1>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
        </div>
        <div>
        <button onClick={()=>setCount(0)}>Reset</button>
        </div>
    </div>
  )
}

export default HookUSCounter;