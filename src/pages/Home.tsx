import React, { ReactElement, useEffect } from 'react';
import { connect } from 'react-redux';
import { setTodosAction, updateTodoAction } from '../actions';
import { ToDoList } from '../components/ToDo';
import { AppState } from '../reducers';
import { getToDos } from '../services/ToDo';
import { ToDoElement } from '../types';

interface StateProps {
  todos: ToDoElement[];
}

interface DispatchProps {
  updateTodo: (todo: ToDoElement) => void;
  setTodos: (todos: ToDoElement[]) => void;
}

type HomeProps = StateProps & DispatchProps;

const Home = ({ todos, updateTodo, setTodos }: HomeProps): ReactElement => {
  console.log('Received props', todos);
  useEffect(() => {
    getToDos().then((results: ToDoElement[]) => setTodos(results));
  }, []);

  const updateElement = (element: ToDoElement): void => {
    console.log('Will update this state', element);
    updateTodo({ ...element, isComplete: !element.isComplete });
  };

  return (
    <div>
      <ToDoList list={todos} updateElement={updateElement} />
    </div>
  );
};

const mapStateToProps = (state: AppState): StateProps => ({
  todos: state.state.todos,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    updateTodo: (todo: ToDoElement) => {
      dispatch(updateTodoAction(todo));
    },
    setTodos: (todos: ToDoElement[]) => {
      dispatch(setTodosAction(todos));
    },
  };
};

export default connect<StateProps, DispatchProps, {}, AppState>(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
