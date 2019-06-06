import React, { Component } from 'react'

import axios from 'axios'

class Click extends Component {
  constructor () {
    super()
    this.state = {
        todos:{},
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    axios.get('http://127.0.0.1:8000/api/1/')
      .then(response => this.setState(todos[i]))
  }

  render () {
    return (
        <div>
        {this.state.todos.map(item => (
        <div className='button__container'>
        <button className='button' onClick={this.handleClick}>Click Me</button>
        <h5>{item.name}</h5>
        <h5>{item.description}</h5>
      </div>
        ))}
      </div>
    )
  }
}
export default Click