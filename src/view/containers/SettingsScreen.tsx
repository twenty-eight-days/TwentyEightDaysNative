import React from 'react'
import { Alert, ScrollView, Text, View } from 'react-native'
import { RootState } from '../../controller/redux'
import tailwind from 'tailwind-react-native-classnames'
import { Button, ButtonImg } from '../components/buttons'
import { exportJson } from '../../controller/share'
import { useSelector } from 'react-redux'
import { deleteAll, Period } from '../../model/storage'

export const SettingsScreen = () => {
  const periods = useSelector((state: RootState) => state.storage.periods)
  return (
    <ScrollView style={tailwind.style('flex flex-col mx-10')}>
      <Export periods={periods} />
      <DeleteAll />
      <Text style={tailwind.style('my-5 text-2xl text-red-800')}>Warning</Text>
      <Text style={tailwind.style('my-1 text-xl text-red-800')}>
        This app is not intended for contraception.
      </Text>
    </ScrollView>
  )
}
const Export = (props: { periods: Period[] }) => {
  return (
    <View style={tailwind.style('')}>
      <Text style={tailwind.style('my-5 text-xl text-black')}>Export Data</Text>
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
      <Text style={tailwind.style('my-5 text-xl text-black')}>
        Delete All Data
      </Text>
      <Button
        onPress={() => {
          Alert.alert('DELETE', 'Are you sure, you want delete ?!?', [
            { text: 'cancel' },
            {
              text: 'delete All',
              onPress: () => deleteAll(),
            },
          ])
        }}
        text={'Delete'}
      />
    </View>
  )
}
