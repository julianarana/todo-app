import React, { ReactElement } from 'react';
import { ToDoElement } from '../../types';
import styled from 'styled-components';
import { ToDoListElement } from './ToDoListElement';

interface ToDoListProps {
  list: ToDoElement[];
}

const ListWrapper = styled.ul`
  list-style: none;
  padding: 0;
  position: relative;
  max-width: 500px;
  margin: auto;
`;

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

export const ToDoList = ({ list }: ToDoListProps): ReactElement => {
  const elementClicked = (id: string) => {
    console.log('Just clicked me', id);
  };
  return (
    <ListWrapper>
      {list.map((element) => (
        <ToDoListElement element={element} key={element.id} />
      ))}
    </ListWrapper>
  );
};
