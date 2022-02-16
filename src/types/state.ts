import { ToDoElement } from '.';

export enum ActionType {
  SET_TODOS,
  UPDATE_TODO,
}

export interface ActionPayload<T, S = ActionType> {
  type: S;
  payload: T;
}

export type SetTodosAction = ActionPayload<ToDoElement[], ActionType.SET_TODOS>;
export type UpdateTodoAction = ActionPayload<
  ToDoElement,
  ActionType.UPDATE_TODO
>;

