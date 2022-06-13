import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:"Hello"
      }

      this.clickhandler = this.clickhandler.bind(this);
    }

    // clickhandler(){
    //     this.setState({
    //         message:"GoodBye!!!U clicked There"
    //     }, ()=>{
    //         console.log(this.state.message)
    //     })

    //     console.log(this.state.message)
    // }
    clickhandler = () =>{
        this.setState({
            message:"Goodbye!"
        })
    }
  render() { 
    return (
      <div>
          <div>{this.state.message}</div>
          {/* <button onClick={this.clickhandler.bind(this)}>click to change</button> */}
          {/* <button onClick={()=>{this.clickhandler()}}>Click</button> */}
          <button onClick={this.clickhandler}>click</button>
          </div>
    )
  }
}

export default EventBind