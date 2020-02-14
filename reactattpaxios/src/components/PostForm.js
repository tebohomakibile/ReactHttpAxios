import React, { Component } from 'react'
import axios from 'axios'

class PostForm extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            userId: '',
            title: '',
            body: ''
        }
    }

    changeHander = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitHandler = (event) => {
        event.preventDefault() // This is used to prevent a page refresh
        console.log('Current state', this.state)

        const headers = {
            'Content-Type': 'application/json',
            'X-Auth-Token': '97e0d315477f435489cf04904c9d0e6co',
        };

        axios.post('https://jsonplaceholder.typicode.com/posts', this.state, {headers})
        .then( response => {
            console.log('Sever response: ', response)
        })
        .catch( error => {
            console.log('Caught error: ', error)
        })
    }

    

    render() {

        // Destructure the state first
        const {name, title, body} = this.state

        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <label>User ID: </label>
                        <input type='text' name='userId' value={name} onChange={this.changeHander} />
                    </div>
                    <div>
                        <label>Title: </label>
                        <input type='text' name='title' value={title} onChange={this.changeHander} />
                    </div>
                    <div>
                        <label>Body: </label>
                        <input type='text' name='body' value={body} onChange={this.changeHander} />
                    </div>
                    <button type='submit'>Post</button>
                </form>
            </div>
        )
    }
}

export default PostForm
