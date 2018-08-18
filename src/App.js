import React from 'react';
import { Provider } from 'react-redux';

import 'react-toastify/dist/ReactToastify.css';

import './config/reactotron';
import './styles/global';

import Routes from './routes';

import store from './store';

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
