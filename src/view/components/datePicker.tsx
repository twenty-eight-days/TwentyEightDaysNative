import React, { useState } from 'react'
import { View } from 'react-native'
import DateTimePicker, { Event } from '@react-native-community/datetimepicker'
import { Button } from './buttons'

export const Datepicker = (props: { onPress: (event: Event, d: Date | undefined) => void }) => {
  const [date] = useState(new Date())
  const [show, setShow] = useState(false)
  return (
    <View>
      <Button onPress={() => setShow(true)} text={'Date'} />
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
