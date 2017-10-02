import React, { Component } from 'react';
import Toggle from './Toggle.js';
import ConditionalRenderingFunction from './conditionalRendering.js'
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

  // sorting
  sortByDate(){
    console.log("dates!");
  }
  sortByPerson(){
    console.log("people!");
  }

  //toggle item from incomplete to complete for all to see.
  // toggleItem(index) {
  //   const items = this.state.toDoList.slice();
  //   toDoList[index].isComplete = !toDoList[index].isComplete;
  //
  //   this.setState({
  //     toDoList: data
  //   });
  // }

  render() {
    return (
      <div className="list">
        <div className="sortingSection">
          <h2>Sorting</h2>
          <button onClick={this.sortByDate}>By Date</button>
          <button onClick={this.sortByPerson}>By Person</button>
        </div>
        <ConditionalRenderingFunction toDoList={this.state.toDoList}/>
      </div>
    )
  }
}

export default ToDoList;
