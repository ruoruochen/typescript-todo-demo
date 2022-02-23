import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleTodo } from "../../redux/actions.ts";
type Props = {};

type State = {};

class TodoItem extends Component<Props, State> {
  state = {};

  handleClick = (id) => {
    this.props.dispatch(toggleTodo(id));
  };

  render() {
    const { data } = this.props;
    return (
      <div>
        <div
          key={data.id}
          onClick={() => {
            this.handleClick(data.id);
          }}
        >{`${data.content}:${data.done}`}</div>
      </div>
    );
  }
}

export default connect((state) => ({
  todoList: state.todoList,
}))(TodoItem);
