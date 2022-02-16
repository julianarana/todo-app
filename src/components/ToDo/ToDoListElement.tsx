import React, { ReactElement, useMemo } from 'react';
import { ToDoElement } from '../../types';
import styled from 'styled-components';

interface ToDoListProps {
  element: ToDoElement;
}

const ListElementWrapper = styled.li<{ isComplete: boolean; isDue: boolean }>`
  align-items: center;
  background: ${({ isComplete, isDue }) => {
    if (isComplete) {
      return 'var(--color-green)';
    } else if (isDue) {
      return 'var(--color-red)';
    }
    return 'var(--color-gray)';
  }};
  cursor: pointer;
  display: grid;
  margin: 0.5rem 0;
  grid-template-columns: 40px 2fr 2fr;
`;

const DateWrapper = styled.span`
  border: 1px solid var(--color-dark-gray);
  display: inline-block;
  padding: 2px;
  margin: 0.5em;
  font-size: 0.8em;
`;

export const ToDoListElement = ({ element }: ToDoListProps): ReactElement => {
  const elementClicked = (id: string) => {
    console.log('Just clicked me', id);
  };

  const date: Date | null = useMemo(() => {
    if (element.dueData) {
      return new Date(element.dueData);
    }
    return null;
  }, [element.dueData]);

  const isDue: boolean = useMemo(() => {
    if (date) {
      return date.getTime() < Date.now();
    }
    return false;
  }, [date]);

  return (
    <ListElementWrapper
      key={element.id}
      isComplete={element.isComplete}
      isDue={isDue}
      onClick={() => elementClicked(element.id)}
    >
      <input type="checkbox" checked={element.isComplete} />
      {element.description}{' '}
      {date && <DateWrapper>{date.toLocaleString()}</DateWrapper>}
    </ListElementWrapper>
  );
};
