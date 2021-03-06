import React, { Component } from 'react';
import TodoItem from './TodoItem';


class Todos extends Component {
  render() {
    return (
        this.props.todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} deleteTodo={this.props.deleteTodo} markComplete={this.props.markComplete}/>
        )
        )
    ); 
  }
}

export default Todos;