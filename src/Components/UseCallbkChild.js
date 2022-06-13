import React,{useCallback,useState} from 'react'

function UseCallbkChild() {
    const [todos, setTodos] = useState([])
    console.log("Child Compo Rendering")

    const addTodo = () => {
       
        
    }
  return (
      <div>
        <h2>My TODOS</h2>
        {
            todos.map((todo,i)=>{
                <li key={i}>{todo}</li>
            })
        }
        <button onClick={addTodo}>Add To do </button>

    </div>
  )
}

export default React.memo(UseCallbkChild)