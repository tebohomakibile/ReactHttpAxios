import React, { Component } from 'react'
import axios from 'axios'

class HttpGet extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            posts: []
        }
    }
    

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then( response => {
            console.log(response)
            this.setState({
                posts: response.data
            })
        })
        .catch( error => {
            console.log(error)
        })
    }

    render() {

        const {posts} = this.state
        return (
            <ol>
                
                    {
                        posts.length ?
                        posts.map(post => <li key={post.id}>{post.title}</li>):
                        null
                    }
                
            </ol>
        )
    }
}

export default HttpGet
