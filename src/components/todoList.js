import React, { Component } from 'react';
import Sort from './sorting.js'
import ListForm from './listForm.js'
import List from './list.js';
const URL = 'https://finalprojectbackend.herokuapp.com';

//this is the main component. Information is sent to and from the API here. Logic dealing with state lives here.

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
      allTodos: [],
      isComplete: false,
      description: '',
      personResponsible: '',
      dueDate: ''
    }
  this.handlePersonChange = this.handlePersonChange.bind(this);
  this.sortByPerson = this.sortByPerson.bind(this);
  this.clearSearch = this.clearSearch.bind(this);
  this.getDatData = this.getDatData.bind(this);
  this.delete = this.delete.bind(this);
  this.handlePersonFormChange = this.handlePersonFormChange.bind(this);
  this.handleDateChange = this.handleDateChange.bind(this);
  this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.getDatData();
  }


  getDatData(){
    const url = `${URL}/api/todos`;
    console.log(url);
    fetch(url)
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
    }).then( () => this.getDatData()
    )
  }

  //on click, just show the whole list.
  clearSearch(){
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

  createTodo() {
    fetch(`${URL}/api/todos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
    },
      body: JSON.stringify({
        description: this.state.description,
        isComplete: false,
        personResponsible: this.state.personResponsible,
        dueDate: this.state.dueDate,
      })
    }).then( () => this.getDatData()
  ).then(
    this.setState({
      isComplete: false,
      description: '',
      personResponsible: '',
      dueDate: ''
    })
  )
  }

  //push to state, post it to the db, and then reset state in this component.
  handleSubmit(evt){
    evt.preventDefault();
    const todos = this.state.allTodos.slice();
    todos.push({
      description: this.state.description,
      isComplete: false,
      personResponsible: this.state.personResponsible,
      dueDate: this.state.dueDate,
    })
    this.createTodo(false, this.state.description, this.state.personResponsible, this.state.dueDate)
  }

  handleDescriptionChange(evt) {
    this.setState({
      description: evt.target.value
    });
    evt.preventDefault();
  }
  handleDateChange(evt) {
    this.setState({
      dueDate: evt.target.value
    });
    evt.preventDefault();
  }
  handlePersonFormChange(evt) {
    this.setState({
      personResponsible: evt.target.value
    });
    evt.preventDefault();
  }


  //each time there is a match, push to matches array. when done, set finalList to the matched terms.
  sortByPerson(){
    const matches = [];
    for(let i = 0; i < this.state.toDoList.length; i++){
      if (this.state.searchPerson.toLowerCase() === this.state.toDoList[i].personResponsible.toLowerCase()){
        matches.push({
          description: this.state.toDoList[i].description,
          dueDate: this.state.toDoList[i].dueDate
        })
      }
    }
    this.setState({
      finalList : matches,
      searchedList : matches
    });
  }

//render the form for making a new todo, the search box, and the final list.

  render() {
    return(
      <div>
        <ListForm getDatData={this.getDatData} description={this.state.description} handlePersonFormChange={this.handlePersonFormChange} handleDescriptionChange={this.handleDescriptionChange} personResponsible={this.state.personResponsible} dueDate={this.state.dueDate} handleDateChange={this.handleDateChange} handleSubmit={this.handleSubmit}/>

        <div className="divider"></div>
        <Sort sortByPerson={this.sortByPerson} searchedList={this.state.searchedList} handlePersonChange={this.handlePersonChange} clearSearch={this.clearSearch} toDoList={this.state.toDoList} finalList={this.state.finalList}/>
        <List finalList={this.state.finalList} searchedList={this.state.searchedList}
        delete={this.delete} />
        <div className="divider"></div>
      </div>
    );
  }
}

export default ToDoList;
