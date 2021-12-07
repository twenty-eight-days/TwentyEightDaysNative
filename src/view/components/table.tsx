import React from 'react'
import { Text, View } from 'react-native'
import tailwind from 'tailwind-react-native-classnames'

export const Table = (props: { table: string[] }) => {
  return (
    <View style={tailwind.style('flex flex-col')}>
      {props.table.map(item => (
        <Text style={tailwind.style('py-4')}>{item}</Text>
      ))}
    </View>
  )
}
