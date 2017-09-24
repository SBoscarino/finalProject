import React, { Component } from 'react';
import ListForm from './listForm.js';

class ToDoList extends Component {
  constructor() {
    super();

    this.state = {
      toDoList: [],
      isComplete: '',
      item: '',
      personResponsible: ''
    }
  }

  render() {
    return (
      <div className="list">
        <ListForm />
      </div>
    );
  }
}

export default ToDoList;
