import React, { Component } from 'react';
import ListItem from './listItem.js';

class ListForm extends Component {
  constructor() {
    super();

    this.state = {
      todos: [],
      isComplete: false,
      description: '',
      personResponsible: '',
      dueDate: '',
    }
  }

  handleSubmit = (evt) => {
  evt.preventDefault();
  const todos = this.state.todos.slice();
  todos.push({
    description: this.state.description,
    isComplete: false,
    personResponsible: evt.target.personResponsible,
    dueDate: evt.target.dueDate
  });

  this.setState({
    description: evt.target.description,
    personResponsible: evt.target.personResponsible,
    isComplete: false,
    dueDate: evt.target.dueDate
  });
}

// toggleItem(index) {
//   const items = this.state.todos.slice();
//   todos[index].isComplete = !todos[index].isComplete;
//
//   this.setState({
//     todos: todos
//   });
// }

  handleInputChange = (evt) => {
  this.setState({
    description: evt.target.description,
    personResponsible: evt.target.personResponsible,
    dueDate: evt.target.dueDate
  });
}



  render() {
    let itemList;
    if (this.state.todos.length > 0) {
      itemList = <ul>
        {this.state.todos.map((todo, index) => {
          return <ListItem key={index} todo={todo} todoClick={() => this.toggleItem(index)} />
        })}
      </ul>
    }
    else {
      itemList = <p>Hello! Add some stuff to the list! Add above!</p>
    }
    return (
      <div className="list">
        <form onSubmit={this.handleSubmit}>
          <label>What do you need done?:
            <input type='text' value={this.state.description} onChange={this.handleInputChange}/>
          </label>
          <label> Who is responsible? :
            <input type='text' value={this.state.personResponsible} onChange={this.handleInputChange}/>
          </label>
          <label> Due Date :
            <input type='date' value={this.state.dueDate} onChange={this.handleInputChange}/>
          </label>
        </form>
      </div>
    );
  }
}

export default ListForm;
