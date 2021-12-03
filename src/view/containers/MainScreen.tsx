import React from 'react';
import {App as AppComponent} from '../components/App';
import {Provider} from 'react-redux';
import {store} from '../../model';

export const MainScreen = () => (
  <Provider store={store}>
    <AppComponent />
  </Provider>
);
