import React, { Component } from 'react';
import Toggle from './Toggle.js';
import ConditionalRenderingFunction from './conditionalRendering.js'
import Sort from './sorting.js';
const URL = 'http://localhost:5003';

class ToDoList extends Component {
  constructor() {
    super();

    this.state = {
      searchedList: [],
      searchTerm: '',
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
        <Sort toDoList={this.state.toDoList}/>
        <ConditionalRenderingFunction toDoList={this.state.toDoList}/>
      </div>
    )
  }
}

export default ToDoList;
