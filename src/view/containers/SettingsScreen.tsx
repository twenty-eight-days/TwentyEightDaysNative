import tailwind from 'tailwind-react-native-classnames'
import { ButtonImg } from '../components/buttons'
import { exportJson } from '../../controller/share'
import { View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../controller/redux'

export const SettingsScreen = () => {
  const periods = useSelector((state: RootState) => state.storage.periods)
  return (
    <View style={tailwind.style('m-10')}>
      <ButtonImg
        onPress={() => exportJson(periods)}
        text={'Share'}
        src={require('../ressources/share.png')}
      />
    </View>
  )
}
