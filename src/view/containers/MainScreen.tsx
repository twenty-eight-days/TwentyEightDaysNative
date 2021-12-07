import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import tailwind from 'tailwind-react-native-classnames'
import { Datepicker } from '../components/datePicker'
import { ButtonImg } from '../components/buttons'
import { Period, storage } from '../../model/storage'
import { Table } from '../components/table'

export const MainScreen = () => {
  const [days] = useState(99)
  const [dates, setDates] = useState<Period[]>([])
  const nextPeriod = new Date()
  nextPeriod.setDate(nextPeriod.getDate())
  useEffect(() => {
    storage.read().then(periods => setDates(periods))
  }, [])
  return (
    <View style={tailwind.style('flex flex-col my-auto mx-10')}>
      <View style={tailwind.style('')}>
        <Text style={tailwind.style('text-4xl mx-auto')}>🩸</Text>
        <Text style={tailwind.style('text-xl text-black m-auto font-black')}>{nextPeriod.toDateString()}</Text>
        <Text style={tailwind.style('text-4xl text-black m-auto font-black')}>{days} days</Text>
      </View>
      <View style={tailwind.style('flex flex-row  my-5')}>
        <ButtonImg
          onPress={() => {
            storage.write({ date: new Date() }).then(() => storage.read().then(periods => setDates(periods)))
          }}
          text={'Today'}
          src={require('../ressources/white_today.png')}
        />
        <Datepicker
          onPress={(event, date) => {
            if (date !== undefined) {
              storage.write({ date: date }).then(() => storage.read().then(periods => setDates(periods)))
            }
          }}
        />
      </View>
      <Table
        table={dates.map(period => {
          return period.date.toDateString()
        })}
      />
    </View>
  )
}
