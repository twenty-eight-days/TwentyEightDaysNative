import React from 'react'
import {
  Alert,
  Linking,
  ScrollView,
  Text,
  TouchableHighlight,
  View,
} from 'react-native'
import { RootState } from '../../controller/redux'
import tailwind from 'tailwind-react-native-classnames'
import { Button, ButtonImg } from '../components/buttons'
import { exportJson } from '../../controller/share'
import { useSelector } from 'react-redux'
import { storage, Period } from '../../model/storage'

export const SettingsScreen = () => {
  const periods = useSelector((state: RootState) => state.storage.periods)
  return (
    <ScrollView style={tailwind.style('flex flex-col mx-10')}>
      <Export periods={periods} />

      <DeleteAll />

      <LegalNotice />
    </ScrollView>
  )
}
const Export = (props: { periods: Period[] }) => {
  return (
    <View style={tailwind.style('')}>
      <Text style={tailwind.style('my-5 text-2xl text-black font-black')}>
        Export Data
      </Text>
      <ButtonImg
        onPress={() => exportJson(props.periods)}
        text={'Share'}
        src={require('../ressources/share.png')}
      />
    </View>
  )
}
const DeleteAll = () => {
  return (
    <View style={tailwind.style()}>
      <Text style={tailwind.style('my-5 text-2xl text-black font-black')}>
        Delete All Data
      </Text>
      <Button
        onPress={() => {
          Alert.alert('DELETE', 'Are you sure, you want delete ?!?', [
            { text: 'cancel' },
            {
              text: 'delete All',
              onPress: () => storage.deleteAll(),
            },
          ])
        }}
        text={'Delete'}
      />
    </View>
  )
}
const LegalNotice = () => {
  return (
    <View style={tailwind.style('mt-auto')}>
      <Text style={tailwind.style('mt-5 text-2xl text-black font-black')}>
        Legal Notice
      </Text>
      <Text style={tailwind.style('my-1 text-black')}>
        Your Data never leaves your device except you use the Share
        functionality
      </Text>
      <Text style={tailwind.style('mt-5 text-xl text-red-800 font-black')}>
        Warning
      </Text>
      <Text style={tailwind.style('my-1 text-red-800')}>
        This app is not intended for contraception.
      </Text>
      <Text style={tailwind.style('mt-5 text-xl text-black font-black')}>
        Open Source
      </Text>
      <TouchableHighlight
        onPress={() =>
          Linking.openURL(
            'https://github.com/twenty-eight-days/TwentyEightDaysNative'
          )
        }
      >
        <Text style={tailwind.style('mb-1 text-xs text-blue-800')}>
          https://github.com/twenty-eight-days
        </Text>
      </TouchableHighlight>
    </View>
  )
}
