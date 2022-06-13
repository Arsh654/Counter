import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }

    increment(){
        // this.setState({
        //     count:this.state.count+1
        // },()=>{
        //     console.log("Async Call : " + this.state.count)
        // })

        this.setState((prevState) => ({
            count:prevState.count+1
        }), ()=>{
            console.log("ASYNC Call : - " + this.state.count)
        })

        console.log(this.state.count);
    }

    decre(){
        if(this.state.count>0){
            this.setState((prevState) => ({
                count:prevState.count-1
            }))
        }
       
    }

    increFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

  render() {
    return (
        <div>
      <div>Counter stands at -{this.state.count}</div>
      <button onClick={()=> this.increFive()}>Incre + </button>
      <button onClick={()=>this.decre()}>decre - </button>
      </div>
    )
  }
}

export default Counter