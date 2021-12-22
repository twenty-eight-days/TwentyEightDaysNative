import React, { useState } from 'react'
import { View } from 'react-native'
import DateTimePicker, { Event } from '@react-native-community/datetimepicker'
import { ButtonImg } from './buttons'
import tailwind from 'tailwind-react-native-classnames'

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
