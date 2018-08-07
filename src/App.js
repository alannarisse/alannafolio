import React, { Component } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import List from './components/List';

class App extends Component {
  // lifecycle method compdidmount happens first time component mounts.
  constructor(){
    super()

    this.state = {
      todos: [ ]
    }
    this.addTodo = this.addTodo.bind(this)
    this.deleteTodo = this.deleteTodo.bind(this)
  }

addTodo(text){
  //console.log(text);
  const todo = {
    id: Math.random(),
    text // es6 will reference this to the arg. so key value pair is assumed.
  } 

  this.state.todos.push(todo)

  this.setState({ todos: this.state.todos })
}

deleteTodo(id){
  //console.log(id)
  const todos = this.state.todos.filter(todo => todo.id !== id)
  this.setState({ todos })
}

  render() {
    return (
      <div className="App">
    
      <AddTodo addTodo={this.addTodo}/>
      <List todos={this.state.todos} deleteTodo={this.deleteTodo}/>

        
      </div>
    );
  }
}

export default App;
