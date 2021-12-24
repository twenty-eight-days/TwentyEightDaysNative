import React from 'react'
import { Period } from '../../model/storage'
import { Text, TouchableHighlight, Alert, Image, View } from 'react-native'
import tailwind from 'tailwind-react-native-classnames'
import { remove } from '../../controller/redux'

export const PeriodTable = (props: { periods: Period[] }) => {
  return (
    <View style={tailwind.style('flex flex-col')}>
      {props.periods.map((item, index) => (
        <TouchableHighlight
          key={index}
          style={tailwind.style('py-2')}
          onPress={() =>
            Alert.alert('DELETE', 'Are you sure, you want delete ?!?', [
              { text: 'cancel' },
              {
                text: 'ok',
                onPress: () => {
                  remove(item)
                },
              },
            ])
          }
        >
          <View style={tailwind.style('flex flex-row')}>
            <Text style={tailwind.style('text-black')}>
              {item.date.toDateString()}
            </Text>
            <Image
              source={require('../ressources/delete.png')}
              style={tailwind.style('ml-auto h-4 w-4')}
            />
          </View>
        </TouchableHighlight>
      ))}
    </View>
  )
}
