import React, { Component } from 'react'

class Hovercounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         hover:0
      }
    }

    hoverIncrement = () =>{
        this.setState((prevState) =>{
            return {hover:prevState.hover+1}
        })
    }

  render() {
      const {hover} = this.state
    return <h1 onMouseOver={this.hoverIncrement}>Hover {hover} Times</h1>
  }
}

export default Hovercounter