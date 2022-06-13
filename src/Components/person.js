import React from 'react'

function person({person}) {
    // console.log(props.person)
  return (
    <div><h2>
        
    I am {person.name} , {person.age}.I know {person.skill}
  </h2></div>
  )
}

export default person