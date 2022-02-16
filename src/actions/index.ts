import { ToDoElement } from '../types';
import { ActionType, SetTodosAction, UpdateTodoAction } from '../types/state';

export const setTodosAction = (todos: ToDoElement[]): SetTodosAction => {
  return {
    type: ActionType.SET_TODOS,
    payload: todos,
  };
};

export const updateTodoAction = (todo: ToDoElement): UpdateTodoAction => {
  return { type: ActionType.UPDATE_TODO, payload: todo };
};
