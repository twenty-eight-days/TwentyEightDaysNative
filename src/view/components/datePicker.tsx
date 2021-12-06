import React, { useState } from 'react'
import { View } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import { Button } from './buttons'

export const Datepicker = (props: { dates: Date[]; setDates: (dates: Date[]) => void }) => {
  const [date] = useState(new Date())
  const [show, setShow] = useState(false)
  return (
    <View>
      <Button onPress={() => setShow(true)} text={'Date'} />
      {show && (
        <DateTimePicker
          testID="datePicker"
          value={date}
          is24Hour={true}
          display="default"
          onChange={(event: Event, d: Date | undefined) => {
            setShow(false)
            if (date !== undefined) {
              if (d) {
                props.dates.push(d)
              }
              props.setDates(props.dates)
            }
          }}
        />
      )}
    </View>
  )
}
