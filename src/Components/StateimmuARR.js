import React,{useState} from 'react'

const initarr = ["Arsh", "Al"]

function StateimmuARR() {
    const [person, setperson] = useState(initarr)

    const changeName = () =>{
        // person.push("Arshad")
        // person.push("Ali")
        // setperson(person)
        const newperson = [...person]
        newperson.push("arshad")
        newperson.push("Ali")
        setperson(newperson)
    }

    console.log("Inside the ...")
  return (
    <div>
        <button onClick={changeName}>Click</button>
        {
            person.map(p => {
                return <div key={Math.random()}>{p}</div>
            })
        }
    </div>
  )
}

export default StateimmuARR