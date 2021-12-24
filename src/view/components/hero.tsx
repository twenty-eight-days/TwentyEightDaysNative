import React from 'react'
import { Period } from '../../model/storage'
import { Text, View } from 'react-native'
import tailwind from 'tailwind-react-native-classnames'
import {
  currentDate,
  currentDuration,
  expectedDate,
} from '../../controller/calculate'

export const Hero = (props: { periods: Period[] }) => {
  return (
    <View
      style={tailwind.style(
        'flex flex-col flex-wrap bg-pink-200 p-4 rounded-xl shadow'
      )}
    >
      <View style={tailwind.style('flex flex-row')}>
        <Text style={tailwind.style('text-black text-xs text-gray-600')}>
          Today:
        </Text>
        <Text
          style={tailwind.style('text-black ml-auto text-xs text-gray-600')}
        >
          {currentDate(props.periods).toDateString()}
        </Text>
      </View>

      <View style={tailwind.style('flex flex-row')}>
        <Text style={tailwind.style('text-black')}>Next Cycle:</Text>
        <Text style={tailwind.style('text-black ml-auto font-black')}>
          {expectedDate(props.periods).toDateString()}
        </Text>
      </View>

      <View style={tailwind.style('flex flex-col')}>
        <Text style={tailwind.style('text-black my-auto')}>
          Current cycle day:
        </Text>
        <Text style={tailwind.style('text-4xl text-black font-black m-auto')}>
          {currentDuration(
            props.periods.length === 0 ? new Date() : props.periods[0].date
          )}
        </Text>
      </View>
    </View>
  )
}
