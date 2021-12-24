import React, { useState } from 'react'
import { Image, Text, TouchableHighlight, View } from 'react-native'
import tailwind from 'tailwind-react-native-classnames'
import DateTimePicker, { Event } from '@react-native-community/datetimepicker'

export const Button = (props: { onPress: (f: any) => void; text: string }) => {
  return (
    <TouchableHighlight
      style={tailwind.style(
        'bg-yellow-500 rounded text-white w-32 p-2 mr-auto shadow-xl'
      )}
      onPress={props.onPress}
    >
      <View style={tailwind.style('flex flex-row')}>
        <Text style={tailwind.style('m-auto text-white text-xl')}>
          {props.text}
        </Text>
      </View>
    </TouchableHighlight>
  )
}
export const Datepicker = (props: {
  onPress: (event: Event, d: Date | undefined) => void
}) => {
  const [date] = useState(new Date())
  const [show, setShow] = useState(false)
  return (
    <View style={tailwind.style('w-32')}>
      <ButtonImg
        onPress={() => setShow(true)}
        text={'Date'}
        src={require('../ressources/white_today.png')}
      />
      {show && (
        <DateTimePicker
          testID="datePicker"
          value={date}
          display="default"
          maximumDate={new Date()}
          onChange={(event: Event, d: Date | undefined) => {
            props.onPress(event, d)
            setShow(false)
          }}
        />
      )}
    </View>
  )
}
export const ButtonImg = (props: {
  onPress: (f: any) => void
  text: string
  src: any
}) => {
  return (
    <TouchableHighlight
      style={tailwind.style(
        'bg-yellow-500 rounded text-white w-32 p-2 mr-auto shadow-xl'
      )}
      onPress={props.onPress}
    >
      <View style={tailwind.style('flex flex-row')}>
        <Image
          style={tailwind.style('h-6 w-6 m-auto')}
          resizeMethod={'scale'}
          source={props.src}
        />
        <Text style={tailwind.style('m-auto text-white text-xl shadow-xl')}>
          {props.text}
        </Text>
      </View>
    </TouchableHighlight>
  )
}
export const ButtonNav = (props: {
  onPress: (f: any) => void
  text: string
  src: any
}) => {
  return (
    <TouchableHighlight
      underlayColor={'#fbf1f7'}
      style={tailwind.style('w-32 p-2 m-auto rounded')}
      onPress={props.onPress}
    >
      <View style={tailwind.style('flex flex-col')}>
        <Image
          style={tailwind.style('h-6 w-6 m-auto')}
          resizeMethod={'scale'}
          source={props.src}
        />
        <Text style={tailwind.style('m-auto text-black text-xl')}>
          {props.text}
        </Text>
      </View>
    </TouchableHighlight>
  )
}
