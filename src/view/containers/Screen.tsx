import React, { useState } from 'react'
import { Provider } from 'react-redux'
import { SafeAreaView, StatusBar } from 'react-native'
import { MainScreen } from './MainScreen'
import tailwind from 'tailwind-react-native-classnames'
import { Footer } from './Footer'
import { Header } from './Header'
import { store } from '../../controller/redux'

export const Screen = () => {
  const [main, setMain] = useState(<MainScreen />)
  return (
    <Provider store={store}>
      <SafeAreaView style={tailwind.style('text-black h-full')}>
        <StatusBar />
        <Header />
        {main}
        <Footer setMain={setMain} />
      </SafeAreaView>
    </Provider>
  )
}
