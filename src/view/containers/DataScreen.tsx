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
            'In colloquial language, an average is a single number taken as representative of a non-empty list of numbers. Different concepts of average are used in different contexts. Often "average" refers to the arithmetic mean, the sum of the numbers divided by how many numbers are being averaged.'
          }
        />
        <Statistic
          title={'Deviation'}
          data={deviationDuration(periods)}
          style={'m-auto'}
          info={'halo'}
        />
        <Statistic title={'Median'} data={median(periods)} />
      </View>
      <View style={tailwind.style('h-full')}>
        <Text style={tailwind.style('text-xl text-black')}>Periods</Text>
        <PeriodTable periods={periods} dispatch={dispatch} />
      </View>
    </ScrollView>
  )
}
