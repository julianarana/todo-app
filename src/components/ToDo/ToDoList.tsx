import React, { ReactElement, useMemo } from 'react';
import { ToDoElement } from '../../types';
import styled from 'styled-components';
import { ToDoListElement } from './ToDoListElement';
import { sortElements } from '../../utils';

interface ToDoListProps {
  list: ToDoElement[];
  updateElement: (element: ToDoElement) => void;
}

const ListWrapper = styled.ul`
  list-style: none;
  padding: 0;
  position: relative;
  max-width: 500px;
  margin: auto;
`;

export const ToDoList = ({
  list,
  updateElement,
}: ToDoListProps): ReactElement => {
  const sortedList = useMemo(() => sortElements(list), [list]);

  return (
    <ListWrapper>
      {sortedList.map((element) => (
        <ToDoListElement
          element={element}
          key={element.id}
          onClick={() => updateElement(element)}
        />
      ))}
    </ListWrapper>
  );
};
