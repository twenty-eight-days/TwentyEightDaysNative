import React, { useEffect } from 'react'
import { Dimensions, ScrollView, Text, View } from 'react-native'
import { storage } from '../../model/storage'
import tailwind from 'tailwind-react-native-classnames'
import {
  averageDuration,
  cycleDuration,
  deviationDuration,
  medianDuration,
} from '../../controller/calculate'
import { PeriodTable } from '../components/periodTable'
import { useDispatch, useSelector } from 'react-redux'
import { Statistic } from '../components/statistic'
import { LineChart } from 'react-native-chart-kit'
import { RootState, write } from '../../controller/redux'

export const DataScreen = () => {
  const periods = useSelector((state: RootState) => state.storage.periods)
  const dispatch = useDispatch()
  useEffect(() => {
    // eslint-disable-line
    storage.read().then(p => dispatch(write(p))) // eslint-disable-line
  }, []) // eslint-disable-line
  if (periods.length > 0) {
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
            data={medianDuration(periods)}
            info={
              'The median is the central value of all cycle durations. It remains stable if you have very different cycle durations and is then more meaningful than the average cycle duration.'
            }
          />
        </View>
        <View>
          <Text style={tailwind.style('text-xl text-black')}>
            Cycle Duration
          </Text>
        </View>
        <LineChart
          data={{
            labels: periods
              .map(p => p.date.toDateString().split(' ').splice(1, 2).join(' '))
              .splice(0, 5),
            datasets: [{ data: cycleDuration(periods).splice(0, 5) }],
          }}
          width={Dimensions.get('window').width * 0.8}
          height={220}
          //fromZero={true}
          yAxisLabel=""
          yAxisSuffix="days"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            decimalPlaces: 0,
            backgroundColor: '#f39d0b',
            backgroundGradientFrom: '#d75987',
            backgroundGradientTo: '#f39d0b',
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#ffa726',
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
        <View style={tailwind.style('h-full')}>
          <Text style={tailwind.style('text-xl text-black')}>Periods</Text>
          <PeriodTable periods={periods} dispatch={dispatch} />
        </View>
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
