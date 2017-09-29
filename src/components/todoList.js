import React, { Component } from 'react';
import ListItem from './listItem.js';
const URL = 'http://localhost:5003';

class ToDoList extends Component {
  constructor(props) {
    super(props);

//here, get all the data.
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
        <h2>Click one to mark as complete.</h2>
        <ul> {this.state.toDoList.map((todo, index) => {
          return(
            <div key={index}>
              <li><h3>{todo.description}</h3></li>
              <li>Person Responsible: {todo.personResponsible}</li>
              <li>Completed By: {todo.dueDate}</li>
            </div>
          )
        })}
        </ul>
      </div>
    )
  }
}

export default ToDoList;
