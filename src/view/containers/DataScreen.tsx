import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import tailwind from 'tailwind-react-native-classnames'
import { Period, storage } from '../../model/storage'
import {
  averageDuration,
  cycleDuration,
  deviationDuration,
} from '../../controller/calculate'
//import { Button } from '../components/buttons'

export const DataScreen = () => {
  const [periods, setPeriods] = useState<Period[]>([])
  const nextPeriod = new Date()
  nextPeriod.setDate(nextPeriod.getDate())
  useEffect(() => {
    storage.read().then(p => setPeriods(p))
  }, [])
  return (
    <View style={tailwind.style('flex flex-col p-10')}>
      <Statistic
        title={'Cycle Duration:'}
        data={cycleDuration(periods).map((duration, index) => {
          return (
            <Text key={index} style={tailwind.style('ml-auto')}>
              {duration} days
            </Text>
          )
        })}
      />
      <Statistic title={'Average:'} data={averageDuration(periods)} />
      <Statistic
        title={'Standard Deviation:'}
        data={deviationDuration(periods)}
      />
    </View>
  )
}
function Statistic(props: { title: string; data: number | JSX.Element[] }) {
  const dataJSX: { [key: string]: JSX.Element } = {
    number: <Text style={tailwind.style('ml-auto my-auto')}>{props.data}</Text>,
    object: (
      <View style={tailwind.style('flex flex-col ml-auto my-auto')}>
        {props.data}
      </View>
    ),
  }
  return (
    <View style={tailwind.style('flex flex-row my-4')}>
      <Text style={tailwind.style('text-xl')}>{props.title}</Text>
      {dataJSX[typeof props.data]}
    </View>
  )
}
