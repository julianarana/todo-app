import React, { ReactElement, useMemo } from 'react';
import { ToDoElement } from '../../types';
import styled from 'styled-components';
import { formatDate, isDue } from '../../utils';

interface ToDoListProps {
  element: ToDoElement;
  onClick: () => void;
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
  grid-template-columns: 40px 1fr auto;
  margin: 0.5rem 0;
  min-height: 40px;
`;

const DateWrapper = styled.span`
  border: 1px solid var(--color-dark-gray);
  display: inline-block;
  padding: 2px 5px;
  margin: 0.5em;
  font-size: 0.8em;
`;

export const ToDoListElement = ({
  element,
  onClick,
}: ToDoListProps): ReactElement => {
  const date: Date | null = useMemo(() => {
    if (element.dueDate) {
      return new Date(element.dueDate);
    }
    return null;
  }, [element.dueDate]);

  const isOverDue: boolean = useMemo(() => isDue(date), [date]);

  return (
    <ListElementWrapper
      isComplete={element.isComplete}
      isDue={isOverDue}
      onClick={onClick}
      data-testid={`wrapper-${element.id}`}
      role="button"
    >
      <input
        type="checkbox"
        checked={element.isComplete}
        data-testid={`checkbox-${element.id}`}
        onChange={() => onClick()}
      />
      {element.description}{' '}
      {date && <DateWrapper>{formatDate(date)}</DateWrapper>}
    </ListElementWrapper>
  );
};
