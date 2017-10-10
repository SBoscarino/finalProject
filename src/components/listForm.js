import React from 'react';
import '../style/main.css';

<<<<<<< HEAD
//for routing
const URL = 'http://localhost:5003';


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

  createTodo(isComplete, description, personResponsible, dueDate) {
    fetch(`${URL}/api/todos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
    },
      body: JSON.stringify({
        description: this.state.description,
        isComplete: false,
        personResponsible: this.state.personResponsible,
        dueDate: this.state.dueDate,
      })
    }).then(
      console.log("state in handle submit before reset", this.state),
      this.setState({
        isComplete: false,
        description: '',
        personResponsible: '',
        dueDate: ''
      }, () => {
        console.log("state in handle submit after reset", this.state);
      })
    )
  }

  //push to state, post it to the db, and then reset state.
  handleSubmit(evt){
    evt.preventDefault();
    const todos = this.state.allTodos.slice();
    todos.push({
      description: this.state.description,
      isComplete: false,
      personResponsible: this.state.personResponsible,
      dueDate: this.state.dueDate,
    })
    this.createTodo(false, this.state.description, this.state.personResponsible, this.state.dueDate);
  }


  handleDescriptionChange(evt) {
    this.setState({
      description: evt.target.value
    });
    evt.preventDefault();
  }
  handleDateChange(evt) {
    this.setState({
      dueDate: evt.target.value
    });
    evt.preventDefault();
  }
  handlePersonChange(evt) {
    this.setState({
      personResponsible: evt.target.value
    });
    evt.preventDefault();
  }
  conditionalRendering(data){
  }


  render() {
    console.log("in render", this.state);
    return (
      <div className="list">
        <form className="mainForm">
          <label>What do you need done? :
            <input type='text' value={this.state.description} onChange={this.handleDescriptionChange}/>
          </label>
          <label> Who is responsible? :
            <input type='text' value={this.state.personResponsible} onChange={this.handlePersonChange}/>
          </label>
          <label> Due Date :
            <input type='date' value={this.state.dueDate} onChange={this.handleDateChange}/>
          </label>
        </form>
        <button onClick={this.handleSubmit}>Add</button>
      </div>
    );
  }
}

export default ListForm;
