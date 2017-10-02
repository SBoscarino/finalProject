import React, { Component } from 'react';
import Toggle from './Toggle.js';
const URL = 'http://localhost:5003';

class ToDoList extends Component {
  constructor() {
    super();

    this.state = {
      toDoList: [],
      isComplete: '',
      description: '',
      personResponsible: ''
    }
  }

  componentDidMount(){
    fetch(`${URL}/api/todos`)
    .then(results => {
      return results.json();
    }).then(data => {
      console.log('data in component did mount', data);
      this.setState({toDoList: data});
    })
  }

  delete(_id){
    fetch(`${URL}/api/todos/delete/${_id}`, {
      method: 'DELETE'
    })
      }


  // toggleItem(index) {
  //   const items = this.state.todos.slice();
  //   allTodos[index].isComplete = !allTodos[index].isComplete;
  //
  //   this.setState({
  //     allTodos: todos
  //   });
  // }

  render() {
    return (
      <div className="list">
        <h2 className="info">Click one to mark as complete.</h2>
        <ul> {this.state.toDoList.map((todo) => {
          return(
            <div  className="one"key={todo._id}>
              <li className="description"><h3>{todo.description}</h3></li>
              <li>Person Responsible: {todo.personResponsible}</li>
              <li>Completed By: {todo.dueDate}</li>
              <li><button onClick={() => this.delete(todo._id)}>Delete</button></li>
            </div>
          )
        })}
        </ul>
      </div>
    )
  }
}

export default ToDoList;
