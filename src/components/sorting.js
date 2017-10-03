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
  
//This is not working.
  sortByPerson(){
    console.log("props",this.props);
    console.log("searchTerm that is compared", this.state.searchPerson.toLowerCase());
    const newList = this.props.toDoList;
      for(let i = 0; i < newList.length; i++){
        if (this.state.searchPerson.toLowerCase() === newList[i].personResponsible.toLowerCase()){
          this.state.searchedList.push({
            description: this.props.description,
            isComplete: false,
            personResponsible: this.props.personResponsible,
            dueDate: this.props.dueDate,
          })
        }
      }
    this.setState({
      searchedList : newList
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
          <ul>
            {this.state.searchedList.map((item)=> {
              return(
              <div key={item._id}>
              <li>{item.description}</li>
              <li>{item.dueDate}</li>
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
