import React from 'react';

import Routes from '../config/Routes';
import { Provider } from 'react-redux';
import Store from '../redux/ConfigureStore';
import './App.scss';


const App = () => {
  return (
    <Provider store={Store}>
      <Routes />
    </Provider>
  );
}

export default App;
