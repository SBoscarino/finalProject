import React, { Component } from 'react';
import ToDoList from './todoList.js';

//this component is for rendering the title, footer, and base info.

class Home extends Component {
  render() {
    return(
      <div>
        <h1 className="title"> Cohort </h1>
        <h2 className="titleTwo"> With help from Alexa, assign and create tasks to be shared with roomates or family. </h2>

        <ToDoList />

        <footer>
        Made with love by <a href="www.stefanieboscarino.com">  Stefanie Boscarino </a> 2017.
        </footer>

      </div>
    );
  }
}

export default Home;
