import React from 'react'
import Person from './person'

function NameList() {
     const metroLine = ["Blue", "green", "pink"]
    const persons = [
      {
        id: 1,
        name: 'Bruce',
        age: 30,
        skill: 'React'
      },
      {
        id: 2,
        name: 'Clark',
        age: 25,
        skill: 'Angular'
      },
      {
        id: 3,
        name: 'Diana',
        age: 28,
        skill: 'Vue'
      }
    ]
     const lineList = metroLine.map((line, i) => <h2 key={i}>{line} </h2>)
    // const personlist = persons.map(person => (
    //   <Person person={person} key={person.id}/>
    // ))
  return (<div>{lineList}</div>)}

export default NameList