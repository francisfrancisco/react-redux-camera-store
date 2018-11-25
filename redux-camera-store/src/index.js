import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { fetchCameras } from './redux/actions/camera-actions';
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';

store.dispatch( fetchCameras() );

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
