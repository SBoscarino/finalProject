import React, { Component } from 'react';
import ListItem from './listItem.js';

class ToDoList extends Component {
  constructor(props) {
    super(props);

//here, get all the data.
    this.state = {
      toDoList: [],
      isComplete: '',
      item: '',
      personResponsible: ''
    }
  }

  componentDidMount(){
    fetch('/api/todos')
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
        <p>This is the TODOLIST component.</p>
      </div>
    )
  }
}

// <ul>
//   {this.state.allTodos.map((todo, index) => {
//     return <li key={index} todo={todo} onClick={() => this.toggleItem(index)} />
//   })}
// </ul>

export default ToDoList;
