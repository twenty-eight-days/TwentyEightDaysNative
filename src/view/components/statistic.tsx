import { Text, View } from 'react-native'
import tailwind from 'tailwind-react-native-classnames'
import React from 'react'

export function Statistic(props: {
  title: string
  data: number | JSX.Element[]
  style?: string
}) {
  let style = props.style
  if (props.style === undefined) {
    style = ''
  }
  return (
    <View style={tailwind.style('flex flex-col my-4 mx-auto ' + style)}>
      <Text style={tailwind.style('text-xl text-black font-black m-auto')}>
        {props.title}
      </Text>
      <View
        style={tailwind.style(
          'm-auto mt-4 shadow-lg rounded-full p-2 h-20 w-20 bg-yellow-500'
        )}
      >
        <View style={tailwind.style('m-auto')}>
          <Text style={tailwind.style('mx-auto text-xl text-white')}>
            {props.data}
          </Text>
          <Text style={tailwind.style('text-sm text-white m-auto')}>days</Text>
        </View>
      </View>
    </View>
  )
}
