import React, { Component } from 'react'
import ChildCompo from './ChildCompo'

class ParentCompo extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           ParentName:'Parent',
           count:0
        }

        //binding "this" to every method...so that this =! "undefined"
        this.greetParent = this.greetParent.bind(this)
        this.incre = this.incre.bind(this)
        this.decre = this.decre.bind(this)
      }

      greetParent(childName){
          console.log("inside the Greetparent")
          alert(`Hello ${this.state.ParentName} from ${childName} Component`)
      }

      incre(){
          console.log("Inside Incre Method")
          this.setState((prevState) => ({
              count:prevState.count+1
          }))
      }

      decre(){
          console.log("Inside Decrement")
          if(this.state.count>0){
              this.setState((prevState) =>({
                  count:prevState.count-1
              }))
          }
      }

  render() {
    return (
      <div>
          <div>Count is :- {this.state.count}</div>
          <ChildCompo 
          greetHandler={this.greetParent} 
          increhandler = {this.incre}
          decrehandler = {this.decre}
          />
      </div>
    )
  }
}

export default ParentCompo