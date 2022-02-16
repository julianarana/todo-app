import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import AppState from './reducers';
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

const store = createStore(AppState);

console.log('The Store', store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Pages />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
