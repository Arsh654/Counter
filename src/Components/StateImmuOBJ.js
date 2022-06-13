import React,{useState} from 'react'

const initName = {
    fname:"arshad",
    lname:"ali"
}

function StateImmuOBJ() {
    const[person,setPerson]  = useState(initName)

    const changeName = () =>{
        // person.fname = "Umar"
        // person.lname = "Ali"
        // setPerson(person)

        const newPerson = {...person}
        newPerson.fname ="MD"
        newPerson.lname = "Umar"
        setPerson(newPerson)
    }

    console.log("StateImmObj here")

  return (
    <div>
        <button onClick={changeName}>{person.fname}{person.lname}</button>
    </div>
  )
}

export default StateImmuOBJ