import React from 'react'
import { Screen } from './view/containers/Screen'
import { store } from './controller/redux'
import { Provider } from 'react-redux'

export const App = () => (
  <Provider store={store}>
    <Screen />
  </Provider>
)
