import React, { Component } from 'react';
import '../style/main.css'

//this component is for sorting toDoList data.

class Sort extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchedList: [],
      searchPerson: ''
    }
    this.handlePersonChange = this.handlePersonChange.bind(this);
    this.sortByPerson = this.sortByPerson.bind(this);
  }

//This is not working.
  // clearSearch(){
  //   let emptyList = [];
  //   this.setState({
  //     searchedList : emptyList
  //   })
  // }

  handlePersonChange(evt) {
    this.setState({
      searchPerson: evt.target.value
    });
    evt.preventDefault();
  }

  sortByPerson(){
    const mainList = this.props.toDoList;
    const filteredList = this.state.searchedList;
      for(let i = 0; i < mainList.length; i++){
        if (this.state.searchPerson.toLowerCase() === mainList[i].personResponsible.toLowerCase()){
          filteredList.push({
            description: this.props.toDoList[i].description,
            dueDate: this.props.toDoList[i].dueDate
          })
        }
      }
    this.setState({
      searchedList : filteredList
    });
  }



  render(){
    if (this.state.searchedList.length === 0) {
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
          <ul> {this.state.searchedList.map((todo) => {
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
              <li className="deleteButton"><button onClick={() => this.delete(todo._id)}>Delete</button></li>
            </div>
          )
        })}
        </ul>
        </div>
      )
    }
  }
}


export default Sort;
