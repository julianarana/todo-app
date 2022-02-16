import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { MenuBar } from './MenuBar';

const LayoutWrapper = styled.div`
  display: block;
  margin: 0;
  padding: 0;
  position: relative;
`;

const LayoutBody = styled.div`
  display: block;
  margin: 0;
  padding: 1em 2em;
  position: relative;
`;

interface LayoutProps {}

export const Layout = ({ children }: PropsWithChildren<LayoutProps>) => {
  return (
    <LayoutWrapper>
      <MenuBar />
      <LayoutBody>{children}</LayoutBody>
    </LayoutWrapper>
  );
};
