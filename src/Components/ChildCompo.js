import React from 'react'

function ChildCompo(props) {
  return (
    <div>
        <button onClick={()=>props.greetHandler("child")} >Greet Parent</button>
        <button onClick={props.increhandler} >Increment + </button>
        <button onClick={props.decrehandler} >Decrement - </button>
    </div>
  )
}

export default ChildCompo