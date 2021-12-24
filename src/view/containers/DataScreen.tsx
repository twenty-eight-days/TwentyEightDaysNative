import React, { useEffect } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { RootState, read } from '../../controller/redux'
import tailwind from 'tailwind-react-native-classnames'
import {
  averageDuration,
  deviationDuration,
  medianDuration,
} from '../../controller/calculate'
import { PeriodTable } from '../components/periodTable'
import { useSelector } from 'react-redux'
import { DayCircle, PeriodsChart } from '../components/statistic'

export const DataScreen = () => {
  const periods = useSelector((state: RootState) => state.storage.periods)
  // eslint is disabled because useEffects needs to only run once and eslint
  // doesn't compile the code with useEffect(()=>{},[])
  useEffect(() => {
    // eslint-disable-line
    read() // eslint-disable-line
  }, []) // eslint-disable-line
  if (periods.length > 0) {
    return (
      <ScrollView style={tailwind.style('flex flex-col px-10')}>
        <View style={tailwind.style('flex flex-row')}>
          <DayCircle
            title={'Average'}
            data={averageDuration(periods)}
            info={
              'The average indicates the average cycle duration. It includes all cycle durations.'
            }
          />
          <DayCircle
            title={'Deviation'}
            data={deviationDuration(periods)}
            style={'m-auto'}
            info={
              'The standard deviation is the average deviation from the mean value. It includes all cycle durations.'
            }
          />
          <DayCircle
            title={'Median'}
            data={medianDuration(periods)}
            info={
              'The median is the central value of all cycle durations. It remains stable if you have very different cycle durations and is then more meaningful than the average cycle duration.'
            }
          />
        </View>
        <Text style={tailwind.style('text-xl text-black')}>Cycle Duration</Text>
        <PeriodsChart periods={periods} />
        <Text style={tailwind.style('text-xl text-black')}>Periods</Text>
        <PeriodTable periods={periods} />
      </ScrollView>
    )
  } else {
    return (
      <View style={tailwind.style('flex flex-col my-auto')}>
        <Text style={tailwind.style('m-auto text-xl text-black')}>
          There is currently nothing to show you
        </Text>
        <Text style={tailwind.style('m-auto text-xl text-black font-black')}>
          Add new Periods
        </Text>
      </View>
    )
  }
}
