import React from 'react';

//functional component that adds a class when an item is done.Toggles completion status.


function Toggle(props) {
  let cssClass = '';
  if (this.props.toDoList.isComplete) {
    cssClass = 'completed';
  }
  return (
    <div className={cssClass} onClick={props.todoClick}>
      <p className="strikeout">{this.props.toDoList.description}</p>
    </div>
  )
}

export default Toggle;
