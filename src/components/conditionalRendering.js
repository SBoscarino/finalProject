import React from 'react';
import '../style/main.css'

//this component is for conditional rendering of the list items in toDoList.js

//this renders twice: once while no data has been mounted and once with the data after mount in the parent element.

function ConditionalRenderingFunction(props) {
  if (props.length === 0) {
    return <div>There is nothing here! Add some items to begin!</div>;
  } else {
    return (
      <div className="list">
        <h2 className="info">Click one to mark as complete.</h2>
        <ul> {props.toDoList.map((todo) => {
          let conditionaldate;
          let newDate;
          if (todo.dueDate === null) {
            conditionaldate = null;
          } else {
            newDate = todo.dueDate.substring(0, 10);
            conditionaldate = <li>Completed By: {newDate}</li>
          }
        return(
          <div className="one"key={todo._id}>
            <li className="description"><h3>{todo.description}</h3></li>
            <li>Person Responsible: {todo.personResponsible}</li>
            {conditionaldate}
            <li><button onClick={() => this.delete(todo._id)}>Delete</button></li>
          </div>
        )
      })}
      </ul>
      </div>
    )
  }
}

export default ConditionalRenderingFunction;
