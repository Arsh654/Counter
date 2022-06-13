import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         data:[],
         ErrorMsg:""
      }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res) =>{
            //console.log(res.data)
            this.setState({data:res.data})
        })
        .catch(error =>{
            //console.log(error)
            this.setState({ErrorMsg:"Error Fetching data"})
        })
    }
  render() {
      const {data, ErrorMsg} = this.state
    return (
      <div>PostList
          {
              data.length? 
              data.map(post => <div key={post.id}>{post.id}. {post.title}</div>):null
          }

         {ErrorMsg?<h1>{ErrorMsg}</h1>:null}
      </div>
    )
  }
}

export default PostList