import React from 'react'
import { View } from 'react-native'
import tailwind from 'tailwind-react-native-classnames'
import { ButtonNav } from './buttons'
import { TodayScreen } from '../containers/TodayScreen'
import { DataScreen } from '../containers/DataScreen'
import { SettingsScreen } from '../containers/SettingsScreen'

export const Footer = (props: { setMain: (main: JSX.Element) => void }) => {
  return (
    <View style={tailwind.style('flex flex-row mt-auto bg-pink-50 z-20')}>
      <ButtonNav
        onPress={() => {
          props.setMain(<TodayScreen />)
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
