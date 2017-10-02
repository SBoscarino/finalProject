import React, { Component } from 'react';
import ToDoList from './todoList.js';
import ListForm from './listForm.js'

class Home extends Component {
  render() {
    return(
      <div>
        <h1 className="title"> Sprinkles </h1>
        <h2 className="titleTwo"> A sassy todo list creator with help from Alexa! </h2>
        <ListForm />
        <div className="divider"></div>
        <ToDoList />
        <div className="divider"></div>
        <footer>
        Made with love by <a href="www.stefanieboscarino.com">  Stefanie Boscarino </a> 2017.
        </footer>
      </div>
    );
  }

}

export default Home;
