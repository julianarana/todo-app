import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Pages from './pages';

const GlobalStyle = createGlobalStyle`
  :root {
    --color-dark-blue: #383e54;
    --color-dark-gray: #333;
    --color-white: #fff;
    --color-red: #ffcbcc;
    --color-gray: #f3f3f3;
    --color-green: #ccffcc;
  }
  body {
    padding: 0;
    margin: 0;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <Pages />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
