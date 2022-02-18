import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { list1 } from '../../__mocks__/todoList';
import { ToDoListElement } from './ToDoListElement';

describe('<ToDoListElement />', () => {
  const onClick = jest.fn();

  it('should display description', () => {
    const { getByText, getByTestId } = render(
      <ToDoListElement onClick={onClick} element={list1[0]} />,
    );

    expect(getByText(list1[0].description)).toBeTruthy();
    expect(getByTestId('checkbox-1')).toBeTruthy();
  });

  it('checkbox should be checked when isComplete is true', () => {
    const { getByTestId } = render(
      <ToDoListElement onClick={onClick} element={list1[0]} />,
    );

    const checkbox: HTMLInputElement = getByTestId(
      'checkbox-1',
    ) as HTMLInputElement;
    expect(checkbox.checked).toBeTruthy();
  });

  it('checkbox should not be checked when isComplete is false', () => {
    const { getByTestId } = render(
      <ToDoListElement onClick={onClick} element={list1[2]} />,
    );

    const checkbox: HTMLInputElement = getByTestId(
      'checkbox-3',
    ) as HTMLInputElement;
    expect(checkbox.checked).toBeFalsy();
  });

  it('date should be displayed if given value on dueDate', () => {
    const { getByText } = render(
      <ToDoListElement onClick={onClick} element={list1[2]} />,
    );
    expect(getByText('06/26/2020')).toBeTruthy();
  });

  it('should call onclick callback when element is clicked', () => {
    const { getByTestId } = render(
      <ToDoListElement onClick={onClick} element={list1[2]} />,
    );

    expect(onClick).toHaveBeenCalledTimes(0);
    fireEvent.click(getByTestId('wrapper-3'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
