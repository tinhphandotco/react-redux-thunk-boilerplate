import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import Root from './Root';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

import store from './redux/configStore';

import './styles/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename={''}>
        <Root />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
