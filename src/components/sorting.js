import React, { Component } from 'react';
import '../style/main.css'

//this component is for sorting toDoList data.

function Sort(props){
  if (props.searchedList.length === 0) {
    return(
      <div className="searchStuff">
        <h2 className="info">Filter</h2>
        <input type="text" placeholder="search by name" value={props.searchPerson} onChange={props.handlePersonChange} />
        <button onClick={props.sortByPerson}>Search</button>
      </div>
    )
  } else {
    return (
      <div className="sortingSection">
      <h2 className="info">Filtered</h2>
        <button className="clearButton" onClick={props.clearSearch}>Clear Search Results</button>
      </div>
    )
  }
}

export default Sort;
