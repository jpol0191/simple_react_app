import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import '../styles/index.scss';
import App from './app';

const app = document.getElementById('root');

// App is rendered here/
ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,
    app,
);

