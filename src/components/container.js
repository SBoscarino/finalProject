import React from 'react';
import '../style/main.css';

//This component is simply a container for the list. Purely visual.


function List(props){

  return(
    <div>
    <h1>Final List Component</h1>
      {props.finalList}
    </div>
  )
}

export default List;
