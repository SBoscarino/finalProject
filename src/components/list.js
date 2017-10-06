import React from 'react';
import '../style/main.css';

//This component is simply a container for the final list. Purely visual.


function List(props){
  if (props.finalList.length === 0) {
    console.log(props);
    return <div>There is nothing here! Add some items to begin!</div>
  } else if (props.searchedList.length > 1) {
    return (
      <div className="fullList">
        <ul> {props.finalList.map((todo) => {
          let conditionaldate;
          let newDate;
          let conditionalPerson;
          if (todo.dueDate === null) {
            conditionaldate = null;
            conditionalPerson = null;
          } else {
            newDate = todo.dueDate.substring(0, 10);
            conditionaldate = <li>Complete By: {newDate}</li>
            conditionalPerson = null;
          }
        return(
          <div className="one"key={todo._id}>
            <li className="description"><h3>{todo.description}</h3></li>
            {conditionalPerson}
            {conditionaldate}
            <li className="deleteButton"><button onClick={() => props.delete(todo._id)}>Delete</button></li>
          </div>
        )
      })}
      </ul>
      </div>
    )
  } else {
    return (
      <div className="fullList">
        <ul> {props.finalList.map((todo) => {
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
            <li>{todo.personResponsible}</li>
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

export default List;
