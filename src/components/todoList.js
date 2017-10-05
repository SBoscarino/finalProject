import React, { Component } from 'react';
import ConditionalRenderingFunction from './conditionalRendering.js'
import SortRedo from './sortingREDO.js';
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
    //   this.state.toDoList[index].isComplete = !this.state.toDoList[index].isComplete;
    //   console.log("in toggleitem");
    // }

  render() {
    return (
      <div className="list">
        <SortRedo delete={this.delete} toDoList={this.state.toDoList}/>
        <ConditionalRenderingFunction delete={this.delete} toDoList={this.state.toDoList}/>
      </div>
    )
  }
}

export default ToDoList;
