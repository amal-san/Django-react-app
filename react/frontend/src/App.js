import React, { Component } from 'react';
import './App.css'
import Login from "./Components/Login"
import Challenge from './Components/Click';
class App extends Component {
  state = {
    todos: []
  };

  async componentDidMount() {
    try {
      const res = await fetch('http://127.0.0.1:8000/challenges/1/');
      const todos = await res.json();
      this.setState({
        todos
      });
    } catch (e) {
      console.log(e);
    }
  }
  render() {
    return (
      <div>
        {this.state.todos.map(item => (
            <div class="cd"key={item.id}>
              <div class="card-body">
                <h5 class="card-title">{item.name}</h5>
                <p class="card-text">{item.description}</p>
                <div class="text-center">
                <a href={item.file} class="btn btn-info" style={{display: !item.file_name && "none"}}>{item.file_name}</a>
                <br></br>
                <input type="text" name="flag"/>
                <a class="btn btn-success">Submit</a>
                <p>{item.flag}</p>
                {item.id}
                </div>
                </div>
              </div>
        ))}
        <Challenge />
        <Login title="Amal"para="asdfasdfasdfasdfasdf"button="submit"/>
      </div>
    );
  }
}

export default App; 