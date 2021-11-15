import React from 'react'
import { App as AppComponent } from '../components/App'
import { Provider } from 'react-redux'
import { store } from '../../store'

export const App = () => (
  <Provider store={store}>
    <AppComponent />
  </Provider>
)
