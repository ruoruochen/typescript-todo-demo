import { IAction } from "../typings/redux.ts";

export const ADD_TODO = "add_todo";
export const DELETE_TODO = "delete_todo";
export const EDIT_TODO = "edit_todo";
export const TOGGLE_STATUS_TODO = "TOGGLE_STATUS_TODO";
export const CLEAR_TODO = "clear_todo";

export const addTodo = (todo: string): IAction => {
  return {
    type: ADD_TODO,
    data: todo,
  };
};

export const deleteTodo = (id: number): IAction => {
  return { type: DELETE_TODO, data: id };
};

export const editTodo = (id: number, content: string): IAction => {
  return { type: EDIT_TODO, data: { id, content } };
};

export const toggleTodo = (id: number): IAction => {
  return { type: TOGGLE_STATUS_TODO, data: id };
};

export const clearTodo = (): IAction => {
  return { type: CLEAR_TODO, data: {} };
};
