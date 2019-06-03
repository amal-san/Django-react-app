import React, { Component } from 'react';
import './App.css'
class App extends Component {
  state = {
    todos: []
  };

  async componentDidMount() {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/');
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
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{item.name}</h5>
                <p class="card-text">{item.description}</p>
                <div class="text-center">
                <a href={item.file} class="btn btn-info">{item.file_name}</a>
                <br></br>
                <input type="text" name="flag"/>
                <a class="btn btn-success">Submit</a>
                <p>{item.flag}</p>
                </div>
                </div>
              </div>
            
        ))}
      </div>
    );
  }
}

export default App;