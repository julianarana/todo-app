import React, { ReactElement } from 'react';
import styled from 'styled-components';

const MenuBarWrapper = styled.div`
  background: var(--color-dark-blue);
  box-sizing: border-box;
  color: var(--color-white);
  font-size: 1.2em;
  padding: 0.7em;
`
export const MenuBar = (): ReactElement => {
  return <MenuBarWrapper>
    Todo App
  </MenuBarWrapper>
}