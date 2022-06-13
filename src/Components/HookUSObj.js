import React,{useState} from 'react'

function HookUSObj() {
    const [name,setName] = useState({firstName:'', lastName:''})
  return (
    <form>
        <input type="text"
         value={name.firstName}
         onChange={e =>setName({...name,firstName:e.target.value})}
         />
        <input type="text"
         value={name.lastname}
         onChange={e =>setName({...name,lastName:e.target.value})}
         />

        <h2>your First Name is:- {name.firstName}</h2>
        <h2>your last Name is:- {name.lastName}</h2>
        <h1>{JSON.stringify(name)}</h1>
    </form>
  )
}

export default HookUSObj