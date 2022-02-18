import React, { ReactElement } from 'react';
import { render, fireEvent } from '@testing-library/react';
import { list1 } from '../../__mocks__/todoList';
import { UnwrappedTodoList as ToDoList } from './ToDoList';

describe('<ToDoList />', () => {
  let updateHandler: jest.Mock;
  let component: ReactElement;
  beforeEach(() => {
    updateHandler = jest.fn();
    component = <ToDoList todos={list1} updateElement={updateHandler} />;
  });

  it('should display description for all the elements', () => {
    const { getByText } = render(component);
    list1.forEach((todo) => {
      expect(getByText(todo.description)).toBeTruthy();
    });
  });

  it('should display all checkboxes', () => {
    const { getByTestId } = render(component);
    list1.forEach((todo) => {
      expect(getByTestId(`checkbox-${todo.id}`)).toBeTruthy();
    });
  });

  it('should call update callback with the element selected', () => {
    const { getByTestId } = render(component);
    expect(updateHandler).toHaveBeenCalledTimes(0);

    list1.forEach((todo) => {
      fireEvent.click(getByTestId(`wrapper-${todo.id}`));
      expect(updateHandler).toHaveBeenCalledWith(todo);
    });
    expect(updateHandler).toHaveBeenCalledTimes(6);
  });
});
