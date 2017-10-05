import React, { Component } from 'react';
import '../style/main.css'
const URL = 'http://localhost:5003';

//this component is for sorting toDoList data.

class SortRedo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filteredList: [],
      searchPerson: '',
      toDoList: []
    }
    this.handlePersonChange = this.handlePersonChange.bind(this);
    this.sortByPerson = this.sortByPerson.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
  }

  clearSearch(){
    fetch(`${URL}/api/todos`)
    .then(results => {
      return results.json();
    }).then(data => {
      console.log('in clearSearch', data);
      this.setState({toDoList: data});
    })
  }

  handlePersonChange(evt) {
    this.setState({
      searchPerson: evt.target.value
    });
    evt.preventDefault();
  }

  sortByPerson(){
    console.log("props", this.props);
    console.log("searched person", this.state.searchPerson);
    let filteredList = [];
    for(let i = 0; i < this.props.toDoList.length; i++){
      console.log("each loop", this.props.toDoList[i].personResponsible);
      if (this.state.searchPerson.toLowerCase() === this.props.toDoList[i].personResponsible.toLowerCase()){
        console.log("matched", this.props.toDoList[i].personResponsible);
        filteredList.push({
          description: this.props.toDoList[i].description,
          dueDate: this.props.toDoList[i].dueDate
        })
      }
    }
    this.setState({
      toDoList : filteredList
    });
  }



  render(){
    if (this.state.filteredList.length === 0) {
      return(
        <div>
          <h2 className="info">Sorting</h2>
          <input type="text" placeholder="search by name" value={this.state.searchPerson} onChange={this.handlePersonChange} />
          <button onClick={this.sortByPerson}>Search</button>
        </div>
      )
    } else {
      return (
        <div className="sortingSection">
          <h2>Sorted: </h2>
          <button onClick={this.clearSearch}>Clear</button>
          <ul> {this.state.toDoList.map((todo) => {
            let conditionaldate;
            let newDate;
            if (todo.dueDate === null) {
              conditionaldate = null;
            } else {
              newDate = todo.dueDate.substring(0, 10);
              conditionaldate = <li>Complete By: {newDate}</li>
            }
          return(
            <div className="one"key={todo._id}>
              <li className="description"><h3>{todo.description}</h3></li>
              {conditionaldate}
              <li className="deleteButton"><button onClick={() => this.props.delete(todo._id)}>Delete</button></li>
            </div>
          )
        })}
        </ul>
        </div>
      )
    }
  }
}


export default SortRedo;
