import { Text, View } from 'react-native'
import tailwind from 'tailwind-react-native-classnames'
import React from 'react'

export const Header = () => {
  return (
    <View style={tailwind.style('p-2 bg-pink-600 flex flex-row')}>
      <Text style={tailwind.style('text-2xl text-white')}>TwentyEightDays</Text>
    </View>
  )
}
