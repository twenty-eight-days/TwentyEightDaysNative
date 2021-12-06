import React from 'react'
import { View } from 'react-native'
import tailwind from 'tailwind-react-native-classnames'
import { ButtonNav } from '../components/buttons'
import { MainScreen } from './MainScreen'
import { DataScreen } from './DataScreen'

export const Footer = (props: { setMain: (main: JSX.Element) => void }) => {
  return (
    <View style={tailwind.style('flex flex-row mt-auto')}>
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
    </View>
  )
}
