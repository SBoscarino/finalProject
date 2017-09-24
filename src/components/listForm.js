import React, { Component } from 'react';

class ListForm extends Component {
  constructor() {
    super();

    this.state = {
      isComplete: false,
      item: '',
      personResponsible: ''
    }
  }

  render() {
    return (
      <div className="list">
        <form>
          <label>What do you need done?:
            <input type='text' value={this.state.item} />
          </label>
          <label> Who is responsible? :
            <input type='text' value={this.state.personResponsible} />
          </label>
        </form>
      </div>
    );
  }
}

export default ListForm;
