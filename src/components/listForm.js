import React, { Component } from 'react';
import '../style/main.css';

// this component handles visuals for submitting a new todo.

function ListForm(props){
  return (
    <div className="list">
      <form className="mainForm">
        <label>What do you need done? :
          <input type='text' value={props.description} onChange={props.handleDescriptionChange}/>
        </label>
        <label> Who is responsible? :
          <input type='text' value={props.personResponsible} onChange={props.handlePersonFormChange}/>
        </label>
        <label> Due Date :
          <input type='date' value={props.dueDate} onChange={props.handleDateChange}/>
        </label>
      </form>
      <button onClick={props.handleSubmit}>Add</button>
    </div>
  );

export default ListForm;
