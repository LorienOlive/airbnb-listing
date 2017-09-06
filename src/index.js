import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import createStore from "./store";

import './styles/index.css';

import App from './containers/App';

import registerServiceWorker from './registerServiceWorker';

const store = createStore;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();
