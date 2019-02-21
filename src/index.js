import React, { Fragment } from 'react';
import { Provider } from 'react-redux';

import { View, Text } from 'react-native';

import './config/ReactotronConfig';
import store from './store';

import Routes from './routes';

const App = () => (
  <Provider store={store}>
    <Fragment>
      <Routes />
    </Fragment>
  </Provider>
);

export default App;
