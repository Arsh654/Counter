import axios from 'axios'
import React,{useState,useEffect} from 'react'

function DataFetchUR1() {
    const [loading, setLoading] = useState(true)
    const [post, setPost] = useState({})
    const [error, setError] = useState('')

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/10')
        .then(res=>{
            setLoading(false)
            setError('')
            setPost(res.data)
        })
        .catch(err=>{
            setLoading(false)
            setPost({})
            setError('Something went Wrong')
        })
    },[])

  return (
    <div>
        {loading?"loading....":post.title}
        {error?error:null}
    </div>
  )
}

export default DataFetchUR1