import React, { Component } from "react";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

import "./App.css";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "buy groceries",
        status: false,
      },
      {
        id: 2,
        title: "take bath tmrw",
        status: false,
      },
      {
        id: 3,
        title: "work harder lmao",
        status: false,
      },
    ],
  };

  deleteTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) todo.status = !todo.status;

        return todo;
      }),
    });
  };

  addTodo = (title) => {
    const newTodo = {
      id: 4,
      title,
      status: false,
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    //console.log(this.state);
    return (
      <div className="App">
        <AddTodo addTodo={this.addTodo} />
        <Todos
          todos={this.state.todos}
          markComplete={this.markComplete}
          deleteTodo={this.deleteTodo}
        />
      </div>
    );
  }
}

export default App;
