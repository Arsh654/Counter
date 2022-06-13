import React, { Component } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'
import MemoComp from './MemoComp'

 class ParentPureCompo extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          name:'Arshad'
       }
     }

     componentDidMount(){
         setInterval(() => {
             this.setState({
                 name:'Arshad'
             })
         }, 2000);
     }

  render() {
      console.log("*********Parent Compo render********");
    return (
      <div>
        parent Component
          {/* <PureComp name={this.state.name}/>
          <RegComp name={this.state.name}/> */}
          <MemoComp name={this.state.name}/>
      </div>
    )
  }
}

export default ParentPureCompo