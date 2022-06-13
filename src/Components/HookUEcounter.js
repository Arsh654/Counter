import React,{useEffect, useState} from 'react'

function HookUEcounter() {
    const[count,setCount]=useState(0)
    const[name, setName] = useState('')


    useEffect(() =>{
        console.log("useEffect---Updating the Document");
        document.title = `you have (${count}) new Messages `
    },[count])
  return (
    <div>
        <input
        type="text"
        value={name}
        onChange={e=>setName(e.target.value)}
        ></input>
        <button onClick={()=>setCount(count+1)}>Click {count} times</button>
    </div>
  )
}

export default HookUEcounter