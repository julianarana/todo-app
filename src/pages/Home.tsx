import React, { ReactElement, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { setTodosAction } from '../actions';
import { ToDoList } from '../components/ToDo';
import { Loader } from '../components/Loader';
import { AppState } from '../reducers';
import { getToDos } from '../services/ToDo';
import { ToDoElement } from '../types';
import { useTodos } from '../hooks/useTodos';

const LoaderWrapper = styled.div`
  align-items: center;
  background: rgba(20, 20, 20, 0.4);
  display: flex;
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
`;

interface DispatchProps {
  setTodos: (todos: ToDoElement[]) => void;
}

type HomeProps = DispatchProps;

const Home = ({ setTodos }: HomeProps): ReactElement => {
  const { loading, data: todos } = useTodos();

  useEffect(() => {
    getToDos().then((results: ToDoElement[]) => setTodos(results));
  }, [todos]);

  return (
    <div>
      {loading && (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      )}
      {!loading && <ToDoList />}
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
