import React from 'react'
import { View } from 'react-native'
import tailwind from 'tailwind-react-native-classnames'
import { ButtonNav } from '../components/buttons'
import { MainScreen } from './MainScreen'
import { DataScreen } from './DataScreen'
import { SettingsScreen } from './SettingsScreen'

export const Footer = (props: { setMain: (main: JSX.Element) => void }) => {
  return (
    <View style={tailwind.style('flex flex-row mt-auto bg-pink-50 z-20')}>
      <ButtonNav
        onPress={() => {
          props.setMain(<MainScreen />)
        }}
        text={'Today'}
        src={require('../ressources/today.png')}
      />
      <ButtonNav
        onPress={() => {
          props.setMain(<DataScreen />)
        }}
        text={'Data'}
        src={require('../ressources/table.png')}
      />
      <ButtonNav
        onPress={() => {
          props.setMain(<SettingsScreen />)
        }}
        text={'Settings'}
        src={require('../ressources/settings.png')}
      />
    </View>
  )
}
