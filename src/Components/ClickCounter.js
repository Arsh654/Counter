import React, { Component } from 'react'

class ClickCounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }

      //this.incrementCount = this.incrementCount.bind(this)
    }

    incrementCount = () => {
        this.setState((prevState) =>{
            return {count: prevState.count+1}
        })
    }
  render() {
      const {count} = this.state
    return(<h2>
        <button onClick={this.incrementCount}>Clicked {count} Times </button>
        </h2>
    )
  }
}

export default ClickCounter