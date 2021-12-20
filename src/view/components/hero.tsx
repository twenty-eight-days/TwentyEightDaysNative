import React from 'react'
import { Period } from '../../model/storage'
import { Text, View } from 'react-native'
import tailwind from 'tailwind-react-native-classnames'
import { currentDuration, expectedDate } from '../../controller/calculate'

export const Hero = (props: { periods: Period[] }) => {
  return (
    <View
      style={tailwind.style(
        'flex flex-col flex-wrap bg-pink-200 p-4 rounded-xl shadow-xl'
      )}
    >
      <View style={tailwind.style('flex flex-row')}>
        <Text style={tailwind.style('text-black')}>Expected</Text>
        <Text style={tailwind.style('text-black ml-auto font-black')}>
          {expectedDate(
            props.periods.length !== 0 ? props.periods[0].date : new Date()
          ).toDateString()}
        </Text>
      </View>
      <View style={tailwind.style('flex flex-col')}>
        <Text style={tailwind.style('text-black my-auto')}>
          Current cycle day
        </Text>
        <Text style={tailwind.style('text-4xl text-black font-black m-auto')}>
          {currentDuration(
            props.periods.length !== 0 ? props.periods[0].date : new Date()
          )}
        </Text>
      </View>
    </View>
  )
}
