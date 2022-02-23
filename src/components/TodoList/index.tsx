import React, { Component } from "react";
import TodoItem from "../TodoItem/index.tsx";
import { ITodo } from "../../typings/redux.ts";

type Props = {
  todoList: Array<ITodo>;
};

type State = {};

export default class TodoList extends Component<Props, State> {
  state = {};

  render() {
    const { todoList = [] } = this.props;
    return (
      <div>
        <ul>
          {todoList.map((todo) => (
            <TodoItem data={todo}></TodoItem>
          ))}
        </ul>
      </div>
    );
  }
}
