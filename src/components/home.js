import React, { Component } from 'react';
import ToDoList from './todoList.js';
import ListForm from './listForm.js'

class Home extends Component {
  render() {
    return(
      <div>
        <h1>ThingDoer </h1>
        <ListForm />
        <ToDoList />
      </div>
    );
  }

}

export default Home;
