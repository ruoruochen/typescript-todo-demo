import React, { Component } from "react";
import { connect } from "react-redux";
import TodoList from "../TodoList/index.tsx";

type Props = {};

type State = {};

class MainSection extends Component<Props, State> {
  state = {};

  render() {
    const { todoList } = this.props;
    const { todos } = todoList;
    return (
      <div>
        <TodoList todoList={todos}></TodoList>
      </div>
    );
  }
}

export default connect((state) => ({
  todoList: state.todoList,
}))(MainSection);
