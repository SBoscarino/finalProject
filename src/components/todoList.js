import React, { Component } from 'react';
import Sort from './sorting.js'
import ListForm from './listForm.js'
import List from './list.js';
const URL = 'http://localhost:5003';

class ToDoList extends Component {
  constructor() {
    super();


    //searchedlist = list searches are ported into this.
    //toDoList = list containing everything.
    //finallist = list rendered to List component.

    this.state = {
      searchPerson: '',
      searchedList: [],
      finalList: [],
      toDoList: [],
      isComplete: '',
      description: '',
      personResponsible: ''
    }
  this.handlePersonChange = this.handlePersonChange.bind(this);
  this.sortByPerson = this.sortByPerson.bind(this);
  this.clearSearch = this.clearSearch.bind(this);
  }

  componentDidMount(){
    fetch(`${URL}/api/todos`)
    .then(results => {
      return results.json();
    }).then(data => {
      console.log('data in component did mount', data);
      this.setState({
        toDoList: data,
        finalList: data
      });
    })
  }

  delete(_id){
    fetch(`${URL}/api/todos/delete/${_id}`, {
      method: 'DELETE'
    })
  }

  //on click, just show the whole list.
  clearSearch(){
    console.log('clear!');
    this.setState({
      finalList : this.state.toDoList,
      searchedList: []
    })
  }

  handlePersonChange(evt) {
    this.setState({
      searchPerson: evt.target.value
    });
    evt.preventDefault();
  }

  //each time there is a match, push to searchedList in state. when done, set finalList to searchedList
  sortByPerson(){
    for(let i = 0; i < this.state.toDoList.length; i++){
      if (this.state.searchPerson.toLowerCase() === this.state.toDoList[i].personResponsible.toLowerCase()){
        this.state.searchedList.push({
          description: this.state.toDoList[i].description,
          dueDate: this.state.toDoList[i].dueDate
        })
      }
    }
    this.setState({
      finalList : this.state.searchedList
    });
  }


  render() {
    return(
      <div>
        <ListForm />
        <div className="divider"></div>
        <Sort sortByPerson={this.sortByPerson} searchedList={this.state.searchedList} handlePersonChange={this.handlePersonChange} clearSearch={this.clearSearch} toDoList={this.state.toDoList} finalList={this.state.finalList}/>
        <List finalList={this.state.finalList} searchedList={this.state.searchedList} />
        <div className="divider"></div>
      </div>
    );
  }
}

export default ToDoList;
