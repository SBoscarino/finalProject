import React from 'react';

//functional component that adds a class when an item is done.Toggles completion status.


function Toggle(props) {
  let cssClass = '';
  if (props.item.isDone) {
    cssClass = 'completed';
  }

  return (
    <div className={cssClass} onClick={props.todoClick}>
      <p className="handwriting">{props.item.text}</p>
    </div>
  )
}

export default Toggle;
