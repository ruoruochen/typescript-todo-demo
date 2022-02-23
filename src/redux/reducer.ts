import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  TOGGLE_STATUS_TODO,
  CLEAR_TODO,
} from "./actions.ts";

import { IAction, IState } from "../typings/redux";

const INITIAL_STATE = {
  todos: [],
};

let COUNT_UP_ID = 0;

export default function reducer(
  state = INITIAL_STATE,
  action: IAction
): IState {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: COUNT_UP_ID++, content: action.data, done: false },
        ],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.data),
      };
    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map((item) => {
          if (item.id === action.data.id) {
            item.content = action.data.content;
          }
          return item;
        }),
      };
    case TOGGLE_STATUS_TODO:
      return {
        ...state,
        todos: state.todos.map((item) => {
          if (item.id === action.data) {
            item.done = !item.done;
          }
          return item;
        }),
      };
    case CLEAR_TODO:
      return {
        ...state,
        todos: [],
      };
    default:
      return {
        ...state,
      };
  }
}
