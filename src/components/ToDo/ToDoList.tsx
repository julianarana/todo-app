import React, { ReactElement, useMemo } from 'react';
import { ToDoElement } from '../../types';
import styled from 'styled-components';
import { ToDoListElement } from './ToDoListElement';
import { sortElements } from '../../utils';
import { AppState } from '../../reducers';
import { connect } from 'react-redux';
import { updateTodoAction } from '../../actions';

interface StateProps {
  todos: ToDoElement[];
}

interface DispatchProps {
  updateElement: (todo: ToDoElement) => void;
}

type ToDoListProps = StateProps & DispatchProps;

const ListWrapper = styled.ul`
  list-style: none;
  padding: 0;
  position: relative;
  max-width: 500px;
  margin: auto;
`;

const ToDoList = ({ todos, updateElement }: ToDoListProps): ReactElement => {
  const sortedList = useMemo(() => sortElements(todos), [todos]);

  return (
    <ListWrapper>
      {sortedList.map((element,) => (
        <ToDoListElement
          element={element}
          key={element.id}
          onClick={() => {
            updateElement({ ...element, isComplete: !element.isComplete });
          }}
        />
      ))}
    </ListWrapper>
  );
};

const mapStateToProps = (state: AppState): StateProps => ({
  todos: state.state.todos,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    updateElement: (todo: ToDoElement) => {
      dispatch(updateTodoAction(todo));
    },
  };
};

const wrappedTodoList = connect<StateProps, DispatchProps, {}, AppState>(
  mapStateToProps,
  mapDispatchToProps,
)(ToDoList);

export { wrappedTodoList as ToDoList, ToDoList as UnwrappedTodoList };
