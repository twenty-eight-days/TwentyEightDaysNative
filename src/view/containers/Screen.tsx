import React, { useState } from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { RootState } from '../../controller/redux'
import tailwind from 'tailwind-react-native-classnames'
import { useSelector } from 'react-redux'
import { TodayScreen } from './TodayScreen'
import { Footer } from '../components/footer'
import { Header } from '../components/header'
import { Popup } from '../components/popup'

export const Screen = () => {
  const [main, setMain] = useState(<TodayScreen />)
  const popup = useSelector((state: RootState) => state.popup.popupIsVisible)
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
