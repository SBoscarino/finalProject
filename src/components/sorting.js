import React, { Component } from 'react';
import '../style/main.css'

//this component is for sorting toDoList data.

function Sort(props){
  if (props.searchedList.length === 0) {
    return(
      <div>
        <h2 className="info">Sorting</h2>
        <input type="text" placeholder="search by name" value={props.searchPerson} onChange={props.handlePersonChange} />
        <button onClick={props.sortByPerson}>Search</button>
      </div>
    )
  } else {
    return (
      <div className="sortingSection">
        <h2>Sorted: </h2>
        <button onClick={props.clearSearch}>Clear</button>
        <ul> {props.searchedList.map((todo) => {
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
            <li className="deleteButton"><button onClick={() => props.delete(todo._id)}>Delete</button></li>
          </div>
        )
      })}
      </ul>
      </div>
    )
  }

}


export default Sort;
