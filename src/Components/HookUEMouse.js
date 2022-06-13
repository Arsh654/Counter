import React,{useState,useEffect} from 'react'

function HookUEMouse() {
    const[x,setX] = useState(0)
    const[y,setY] = useState(0)

    const logMousePosition = (e) =>{
        console.log("Mouse Event")
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() =>{
        console.log("UseEffect callled")
        window.addEventListener('mousemove', logMousePosition)

        return ()=>{
            console.log("component destroying")
            window.removeEventListener("mousemove",logMousePosition)
        }
    },[])

  return (
    <div>
        Hooks X - {x} and Y- {y}
    </div>
  )
}

export default HookUEMouse