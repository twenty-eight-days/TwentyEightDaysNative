import React, { useState } from 'react'
import { Text, View } from 'react-native'
import tailwind from 'tailwind-react-native-classnames'
import { Datepicker } from '../components/datePicker'
import { ButtonImg } from '../components/buttons'

export const MainScreen = () => {
  const [days, setDays] = useState(12)
  const [dates, setDates] = useState<Date[]>([])
  const nextPeriod = new Date()
  nextPeriod.setDate(nextPeriod.getDate() + 28 - days)
  return (
    <View style={tailwind.style('flex flex-col my-auto')}>
      <View style={tailwind.style('')}>
        <Text style={tailwind.style('text-4xl mx-auto')}>🩸</Text>
        <Text style={tailwind.style('text-xl text-black m-auto font-black')}>{nextPeriod.toDateString()}</Text>
        <Text style={tailwind.style('text-4xl text-black m-auto font-black')}>{days} days</Text>
      </View>
      <View style={tailwind.style('flex flex-row mx-10 my-5')}>
        <ButtonImg
          onPress={() => {
            if (days + 1 < 28) {
              setDays(1)
              dates.push(new Date())
              setDates(dates)
            } else {
              setDays(0)
            }
          }}
          text={'Today'}
          src={require('../ressources/white_today.png')}
        />
        <Datepicker dates={dates} setDates={setDates} />
      </View>
    </View>
  )
}
