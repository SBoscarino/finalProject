import React, { Component } from 'react';
import ListItem from './listItem.js';

class ListForm extends Component {
  constructor() {
    super();

    this.state = {
      allTodos: [],
      isComplete: false,
      description: '',
      personResponsible: '',
      dueDate: ''
    }
    this.handlePersonChange = this.handlePersonChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt){
    evt.preventDefault();
    const todos = this.state.allTodos.slice();
    todos.push({
      description: this.state.description,
      isComplete: false,
      personResponsible: this.state.personResponsible,
      dueDate: this.state.dueDate,
    });

    this.setState({
      allTodos : todos,
      description: '',
      personResponsible: '',
      isComplete: false,
      dueDate: '',
    });
    console.log("state in handle submit", this.state);
  }

// toggleItem(index) {
//   const items = this.state.todos.slice();
//   allTodos[index].isComplete = !allTodos[index].isComplete;
//
//   this.setState({
//     allTodos: todos
//   });
// }

  handleDescriptionChange(evt) {
    this.setState({
      description: evt.target.value
    });
    evt.preventDefault();
    console.log("state in input change", this.state);
  }
  handleDateChange(evt) {
    this.setState({
      dueDate: evt.target.value
    });
    evt.preventDefault();
    console.log("state in input change", this.state);
  }
  handlePersonChange(evt) {
    this.setState({
      personResponsible: evt.target.value
    });
    evt.preventDefault();
    console.log("state in input change", this.state);
  }


// componentDidMount(){
//   fetch('/api/todos')
//   .then(results => {
//     return results.json();
//   }).then(data => {
//     console.log('data in component did mount', data);
//     this.setState({allTodos: data});
//   })
// }


  render() {
    console.log("in render", this.state);
    // let itemList;
    // if (this.state.allTodos.todos.length > 0) {
    //   itemList = <ul>
    //     {this.state.allTodos.map((todo, index) => {
    //       return <ListItem key={index} todo={todo} todoClick={() => this.toggleItem(index)} />
    //     })}
    //   </ul>
    // }
    // else {
    //   itemList = <p>Hello! Add some stuff to the list! Add above!</p>
    // }
    return (
      <div className="list">
        <form>
          <label>What do you need done?:
            <input type='text' value={this.state.description} onChange={this.handleDescriptionChange}/>
          </label>
          <label> Who is responsible? :
            <input type='text' value={this.state.personResponsible} onChange={this.handlePersonChange}/>
          </label>
          <label> Due Date :
            <input type='date' value={this.state.dueDate} onChange={this.handleDateChange}/>
          </label>
        </form>
        <button onClick={this.handleSubmit}>Clicky</button>
      </div>
    );
  }
}

export default ListForm;
