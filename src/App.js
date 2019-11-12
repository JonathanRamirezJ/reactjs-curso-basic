import React, {Component} from 'react';
import './App.css';

import Navigation from './components/Navigation';
import FormTodo from './components/FormTodo';
import {todos} from './task.json';

class App extends Component{
  constructor() {
    super();
    this.state = {
      title: "Todo do List",
      todos
    };
    this.handleAddtodo = this.handleAddtodo.bind(this);
  }

  handleAddtodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    });
  }

  handleRemove(index) {
    if(window.confirm('Are you sure tou want to delete it ?')){
      this.setState({
        todos: this.state.todos.filter((elem, i) => {
          return i !== index
        })
      })
    }
  }

  render() {
    const task = this.state.todos.map((todo, i) => {
      return (
        <div className="col-md-4 my-2" key={i}>
          <div className="card">
            <div className="card-header">
              {todo.title}
              <span className="badge badge-pill badge-warning ml-2">
                {todo.priority}
              </span>
            </div>
            <div className="card-body">
              <p>{todo.description}</p>
              <p><small>{todo.responsible}</small></p>
            </div>
            <div className="card-footer">
              <button
                className="btn btn-danger"
                onClick={this.handleRemove.bind(this, i)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )
    });
    return (
      <div className="App">
        <Navigation title="Task" length={this.state.todos.length}/>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center m-3 text-white">{this.state.title}</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <FormTodo onAddTodo={this.handleAddtodo}/>
            </div>
            <div className="col-md-9">
              <div className="row">
                {task}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
