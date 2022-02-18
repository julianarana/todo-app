import React, { ReactElement, useEffect } from 'react';
import { connect } from 'react-redux';
import { setTodosAction } from '../actions';
import { ToDoList } from '../components/ToDo';
import { AppState } from '../reducers';
import { getToDos } from '../services/ToDo';
import { ToDoElement } from '../types';

interface DispatchProps {
  setTodos: (todos: ToDoElement[]) => void;
}

type HomeProps = DispatchProps;

const Home = ({ setTodos }: HomeProps): ReactElement => {
  useEffect(() => {
    getToDos().then((results: ToDoElement[]) => setTodos(results));
  }, []);

  return (
    <div>
      <ToDoList />
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setTodos: (todos: ToDoElement[]) => {
      dispatch(setTodosAction(todos));
    },
  };
};

export default connect<{}, DispatchProps, {}, AppState>(
  null,
  mapDispatchToProps,
)(Home);
