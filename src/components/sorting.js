import React, { Component } from 'react';
import '../style/main.css'

//this component is for sorting toDoList data.

class Sort extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchedList: [],
      searchTerm: '',
      isComplete: '',
      description: '',
      personResponsible: ''
    }
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.searchForItem = this.searchForItem.bind(this);
  }

  sortByDate(){
    console.log("date!");
  }

  handleSearchChange(evt) {
    this.setState({
      searchTerm: evt.target.value
    });
    evt.preventDefault();
  }

  searchForItem(searchedList, searchTerm){
    const newList = this.state.searchedList.slice();
      for(let i = 0; i <= this.state.toDoList.length; i++){
        if (this.state.searchTerm === this.state.toDoList[i].personResponsible){
          searchedList.push({
            description: this.state.description,
            isComplete: false,
            personResponsible: this.state.personResponsible,
            dueDate: this.state.dueDate,
          })
        } else if (this.state.searchTerm !== this.state.toDoList[i].personResponsible){
          console.log("no match at", this.state.toDoList[i].personResponsible);
        }
      }
    this.setState({
      searchedList : newList
    });
  }

  render(){
    if (this.state.searchedList.length === 0) {
      return <div>This is where sorted data will go.</div>;
    } else {
      return (
      <div className="sortingSection">
        <h2>Sorting</h2>
        <button onClick={this.sortByDate}>By Date</button>
        <button>Clear</button>
        <div>
          <input type="text" placeholder="search by name" value={this.state.searchTerm} onChange={this.handleSearchChange} />
          <button onClick={this.searchForItem(this.state.toDoList, this.state.searchTerm)}>Search</button>
          </div>
        <ul>
          {this.state.searchedList.map((item)=> {
            return(
              <div>
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
