import React,{useState,useEffect} from 'react'
import HookUEMouse from './HookUEMouse'

function HkUEToggleMouse() {
    const[display,setDisplay] = useState(true)
  return (
    <div>
        <button onClick={()=> setDisplay(!display)}>Toogle Mouse Event</button>
        {display&&<HookUEMouse/>}
    </div>
  )
}

export default HkUEToggleMouse