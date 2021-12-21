import React, { useEffect, useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { Period, storage } from '../../model/storage'
import tailwind from 'tailwind-react-native-classnames'
import {
  averageDuration,
  deviationDuration,
  median,
} from '../../controller/calculate'
import { PeriodTable } from '../components/periodTable'
import { useDispatch } from 'react-redux'
import { Statistic } from '../components/statistic'

export const DataScreen = () => {
  const [periods, setPeriods] = useState<Period[]>([])
  const nextPeriod = new Date()
  const dispatch = useDispatch()
  nextPeriod.setDate(nextPeriod.getDate())
  useEffect(() => {
    storage.read().then(p => setPeriods(p))
  }, [])
  return (
    <ScrollView style={tailwind.style('flex flex-col px-10')}>
      <View style={tailwind.style('flex flex-row')}>
        <Statistic
          title={'Average'}
          data={averageDuration(periods)}
          info={
            'The average indicates the average cycle duration. It includes all cycle durations.'
          }
        />
        <Statistic
          title={'Deviation'}
          data={deviationDuration(periods)}
          style={'m-auto'}
          info={
            'The standard deviation is the average deviation from the mean value. It includes all cycle durations.'
          }
        />
        <Statistic
          title={'Median'}
          data={median(periods)}
          info={
            'The median is the central value of all cycle durations. It remains stable if you have very different cycle durations and is then more meaningful than the average cycle duration.'
          }
        />
      </View>
      <View style={tailwind.style('h-full')}>
        <Text style={tailwind.style('text-xl text-black')}>Periods</Text>
        <PeriodTable periods={periods} dispatch={dispatch} />
      </View>
    </ScrollView>
  )
}
