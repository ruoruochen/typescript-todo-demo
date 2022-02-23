export interface IAction {
  type: string;
  data: string | number | object;
}

export interface IState {
  todos: Array<ITodo>;
}

export interface ITodo {
  id: number;
  content: string;
  done: boolean;
}
