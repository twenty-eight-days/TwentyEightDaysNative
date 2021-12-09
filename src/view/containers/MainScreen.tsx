import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { Period, storage } from '../../model/storage'
import tailwind from 'tailwind-react-native-classnames'
import { Datepicker } from '../components/datePicker'
import { ButtonImg } from '../components/buttons'
import { PeriodTable } from '../components/periodTable'
import { currentDuration } from '../../controller/calculate'

export const MainScreen = () => {
  const [periods, setPeriods] = useState<Period[]>([{ date: new Date() }])
  const nextPeriod = new Date()
  nextPeriod.setDate(nextPeriod.getDate())
  useEffect(() => {
    storage.read().then(p => setPeriods(p))
  }, [])
  return (
    <View style={tailwind.style('flex flex-col my-auto mx-10')}>
      <View style={tailwind.style('')}>
        <Text style={tailwind.style('text-4xl mx-auto')}>🩸</Text>
        <Text style={tailwind.style('text-xl text-black m-auto font-black')}>{nextPeriod.toDateString()}</Text>
        <Text style={tailwind.style('text-4xl text-black m-auto font-black')}>
          {currentDuration(periods.length !== 0 ? periods[0].date : new Date())}
        </Text>
      </View>
      <View style={tailwind.style('flex flex-row  my-5')}>
        <ButtonImg
          onPress={() => {
            storage.write({ date: new Date() }).then(() => storage.read().then(p => setPeriods(p)))
          }}
          text={'Today'}
          src={require('../ressources/white_today.png')}
        />
        <Datepicker
          onPress={(event, date) => {
            if (date !== undefined) {
              storage.write({ date: date }).then(() => storage.read().then(p => setPeriods(p)))
            }
          }}
        />
      </View>
      <PeriodTable periods={periods} setPeriods={setPeriods} />
    </View>
  )
}
