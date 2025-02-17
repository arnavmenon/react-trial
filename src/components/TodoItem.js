import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      textDecoration: this.props.todo.status ? "line-through" : "none",
      padding: "10px",
      borderBottom: "1px black dotted",
    };
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <h3>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />{" "}
          {title}
        </h3>
        <button style={btnstyle} onClick={this.props.deleteTodo.bind(this, id)}>
          X
        </button>
      </div>
    );
  }
}

//prop types

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

const btnstyle = {
  background: "red",
  border: "none",
  borderRadius: "5px",
  padding: "3px 3px",
  cursor: "pointer",
  float: "right",
};

export default TodoItem;
