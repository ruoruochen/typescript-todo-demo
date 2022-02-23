import React, { Component } from "react";
import { Input } from "antd";
import { addTodo } from "../../redux/actions.ts";
import { connect } from "react-redux";

type Props = {};

type State = {};

class Header extends Component<Props, State> {
  state = {
    inputVal: "",
  };

  handleChange = (e) => {
    this.setState({ inputVal: e.target.value });
  };

  handlePressEnter = () => {
    this.props.dispatch(addTodo(this.state.inputVal));
  };

  render() {
    return (
      <div>
        <Input
          placeholder="输入Todo"
          value={this.state.inputVal}
          onChange={this.handleChange}
          onPressEnter={this.handlePressEnter}
        ></Input>
      </div>
    );
  }
}

export default connect((state) => ({
  todoList: state.todoList,
}))(Header);
