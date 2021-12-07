import React from 'react'
import { Text, TouchableHighlight, View } from 'react-native'
import { Period, storage } from '../../model/storage'
import tailwind from 'tailwind-react-native-classnames'

export const PeriodTable = (props: { periods: Period[]; setPeriods: (periods: Period[]) => void }) => {
  return (
    <View style={tailwind.style('flex flex-col')}>
      {props.periods.map((item, index) => (
        <TouchableHighlight
          key={index}
          style={tailwind.style('py-2')}
          onPress={() => storage.delete(item).then(period => props.setPeriods(period))}
        >
          <Text>{item.date.toDateString()}</Text>
        </TouchableHighlight>
      ))}
    </View>
  )
}
