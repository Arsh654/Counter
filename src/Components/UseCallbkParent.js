import React,{useCallback, useState} from 'react'
import UseCallbkChild from './UseCallbkChild'

function UseCallbkParent() {
    const[count, setCount] = useState(0)
    const[todos, setTodos] = useState([])

    const handleClick = () =>{
        setCount((prevCount) =>prevCount+1)
    }

    // const addTodo = useCallback(() => {
    //     setTodos((t) => [...t, "New Todo"]);
    //   }, [todos])
    
  return (
    <div>

        <UseCallbkChild  />
        <hr/>
        <div>
            Count stands at:{count}
            <button onClick={handleClick}>+</button>
        </div>
    </div>
  )
}

export default UseCallbkParent