import { useState, useEffect } from 'react';
import { getToDos } from '../services/ToDo';
import { ToDoElement } from '../types';
import { ServiceHookState } from '../types/hooks';

const INITIAL_STATE: ServiceHookState<ToDoElement[]> = {
  data: [],
  loading: true,
  error: '',
};

export const useTodos = (): ServiceHookState<ToDoElement[]> => {
  const [state, setState] =
    useState<ServiceHookState<ToDoElement[]>>(INITIAL_STATE);

  useEffect(() => {
    getToDos().then((results: ToDoElement[]) =>
      setState((oldState) => ({ ...oldState, loading: false, data: results })),
    ).catch(error => 
      setState((oldState) => ({ ...oldState, loading: false, error: error })),
    );
  }, []);

  return state;
};
