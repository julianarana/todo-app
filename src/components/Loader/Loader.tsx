import React, { ReactElement } from 'react';
import styled from 'styled-components';

const LoaderWrapper = styled.div`
  margin: 0 0 2em;
  height: 100px;
  width: 20%;
  text-align: center;
  padding: 1em;
  margin: 0 auto 1em;
  display: block;
  vertical-align: top;
`;

export const Loader = (): ReactElement => {
  return (
    <LoaderWrapper>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="30px"
        height="30x"
        viewBox="0 0 30 30"
      >
        <rect x="0" y="0" width="4" height="7" fill="#999">
          <animateTransform
            attributeType="xml"
            attributeName="transform"
            type="scale"
            values="1,1; 1,3; 1,1"
            begin="0s"
            dur="0.6s"
            repeatCount="indefinite"
          />
        </rect>

        <rect x="10" y="0" width="4" height="7" fill="#333">
          <animateTransform
            attributeType="xml"
            attributeName="transform"
            type="scale"
            values="1,1; 1,3; 1,1"
            begin="0.2s"
            dur="0.6s"
            repeatCount="indefinite"
          />
        </rect>
        <rect x="20" y="0" width="4" height="7" fill="#abc">
          <animateTransform
            attributeType="xml"
            attributeName="transform"
            type="scale"
            values="1,1; 1,3; 1,1"
            begin="0.4s"
            dur="0.6s"
            repeatCount="indefinite"
          />
        </rect>
      </svg>
    </LoaderWrapper>
  );
};
