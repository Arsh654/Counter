import React from 'react'

function MemoComp({name}) {
    console.log("Rendering Memo Compo")
  return (
    <div>
        memo {name}
    </div>
  )
}

export default React.memo(MemoComp)