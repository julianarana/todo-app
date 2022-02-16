import { combineReducers } from 'redux';
import { todoReducer, TodoState } from './todoReducer';

export interface AppState {
  state: TodoState;
}

const todoApp = combineReducers<AppState>({
  state: todoReducer,
});

export default todoApp;
