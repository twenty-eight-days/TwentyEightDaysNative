import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { SafeAreaView, StatusBar } from 'react-native'
import { MainScreen } from './MainScreen'
import tailwind from 'tailwind-react-native-classnames'
import { Footer } from './Footer'
import { Header } from './Header'
import { RootState } from '../../controller/redux'
import { Popup } from '../components/popup'

export const Screen = () => {
  const [main, setMain] = useState(<MainScreen />)
  const popup = useSelector((state: RootState) => state.popup.visible)
  return (
    <SafeAreaView style={tailwind.style('text-black h-full bg-pink-50')}>
      {!popup ? null : <Popup />}
      <StatusBar />
      <Header />
      {main}
      <Footer setMain={setMain} />
    </SafeAreaView>
  )
}
