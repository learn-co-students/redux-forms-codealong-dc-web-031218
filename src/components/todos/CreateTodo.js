import React, { Component } from "react";

class CreateTodo extends Component {
  constructor() {
    super();

    this.state = {
      text: ""
    };
  }

  handleChange = e => {
    this.setState({
      todo: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.store.dispatch({
      type: "ADD_TODO",
      todo: this.state
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <p>
            <label>add todo</label>
            <input
              onChange={this.handleChange}
              type="text"
              value={this.state.todo}
            />
          </p>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default CreateTodo;
