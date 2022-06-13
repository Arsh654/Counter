import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       userName:" ",
       comments:'',
       topic:"React"
    }
  }

  handleUsernameChange = (e) =>{
    // console.log(e.target.value);
    this.setState({
      userName:e.target.value
    })
  }

  handleCommentsChange = (e) =>{
    this.setState({
      comments:e.target.value
  })
  }

  handleTopicChange = (e) =>{
    this.setState({
      topic:e.target.value
    })
  }
  
  handleSubmit = (e) =>{
    alert(`${this.state.userName} ${this.state.comments} ${this.state.topic}`)
    

    //Resetting the all input fields.
    this.setState({
      userName:"",
      comments:'',
      topic:""
    })

    e.preventDefault()
 
  }

  render() {
    const{userName, comments, topic} = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Username</label>
          <input
           type="text"
           value={userName}
           onChange={this.handleUsernameChange}
           ></input>
        </div>

        <div>
          <label>comments</label>
          <textarea 
           value={comments} 
          onChange={this.handleCommentsChange} ></textarea>
        </div>
       
        <div>
        <label>Topic</label>
        <select value={topic}
        onChange={this.handleTopicChange}>
          <option value="react">React</option>
          <option value="Angular">Angular</option>
          <option value="Vue">Vue</option>
        </select>
        </div>

        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default Form