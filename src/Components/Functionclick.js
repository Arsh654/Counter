import React from 'react'

function Functionclick() {
    function clickHandler(){
        console.log("clicked Button");
    }
  return (
    <div>
        <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default Functionclick