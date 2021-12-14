import React from 'react'
import { Text, TouchableHighlight, Alert, ScrollView } from 'react-native'
import tailwind from 'tailwind-react-native-classnames'
import { write } from '../../controller/redux'
import { Period, storage } from '../../model/storage'

export const PeriodTable = (props: {
  periods: Period[]
  dispatch: (f: any) => void
}) => {
  return (
    <ScrollView style={tailwind.style('flex flex-col')}>
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
                  storage
                    .delete(item)
                    .then(periods => props.dispatch(write(periods)))
                },
              },
            ])
          }
        >
          <Text>{item.date.toDateString()}</Text>
        </TouchableHighlight>
      ))}
    </ScrollView>
  )
}
