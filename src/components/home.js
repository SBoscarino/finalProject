import React, { Component } from 'react';
import ToDoList from './todoList.js';

class Home extends Component {
  render() {
    return(
      <div>
        <h1>ThingDoer </h1>
        <ToDoList />
      </div>
    );
  }

}

export default Home;
