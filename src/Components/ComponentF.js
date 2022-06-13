import React, { Component } from 'react'
import { UserConsumer } from './userContext'

export class ComponentF extends Component {
  render() {
    return (
        <UserConsumer>
            {
                (name) =>{
                    return <h1>Compo F {name}</h1>
                }
            }
        </UserConsumer>
    )
  }
}

export default ComponentF