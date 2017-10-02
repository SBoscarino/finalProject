import React from 'react';

//this component is for conditional rendering of the list items in toDoList.js

function ConditionalRenderingFunction(props) {
  return (
    <div className="list">
      <h2 className="info">Click one to mark as complete.</h2>
      <ul> {this.state.toDoList.map((todo) => {
        let conditionaldate;
        let newDate;
        if (todo.dueDate === null) {
          conditionaldate = null;
        } else {
            newDate = todo.dueDate.substring(0, 9);
          let conditionaldate = <li>Completed By: {newDate}</li>
        }

        return(
          <div  className="one"key={todo._id}>
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

export default ConditionalRenderingFunction;
