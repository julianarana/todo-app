import { ToDoElement } from '../types';
import { ActionType, SetTodosAction, UpdateTodoAction } from '../types/state';

export interface TodoState {
  todos: ToDoElement[];
}

const INITIAL_STATE: TodoState = {
  todos: [],
};

type TodoPayload = SetTodosAction | UpdateTodoAction;

export const todoReducer = (
  state: TodoState = INITIAL_STATE,
  action: TodoPayload,
): TodoState => {
  console.log("here ", action)
  switch (action.type) {
    case ActionType.SET_TODOS:
      return { ...state, todos: action.payload };
    case ActionType.UPDATE_TODO:
      console.log("updating");
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id,
      );
      const newTodos = [...state.todos];
      if (index !== -1) {
        newTodos[index] = action.payload;
      }
      console.log("old", state.todos, newTodos);
      return { todos: newTodos };
    default:
      return state;
  }
};
