import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import tailwind from 'tailwind-react-native-classnames'
import { Period, storage } from '../../model/storage'
import { averageDuration, deviationDuration } from '../../controller/calculate'
//import { Button } from '../components/buttons'

export const DataScreen = () => {
  const [periods, setPeriods] = useState<Period[]>([])
  const nextPeriod = new Date()
  nextPeriod.setDate(nextPeriod.getDate())
  useEffect(() => {
    storage.read().then(p => setPeriods(p))
  }, [])
  return (
    <View style={tailwind.style('flex flex-row flex-wrap p-10')}>
      <Statistic title={'Average'} data={averageDuration(periods)} />
      <Statistic
        title={'Standard Deviation'}
        data={deviationDuration(periods)}
      />
    </View>
  )
}
function Statistic(props: { title: string; data: number | JSX.Element[] }) {
  const dataJSX: { [key: string]: JSX.Element } = {
    number: (
      <View style={tailwind.style('m-auto')}>
        <Text style={tailwind.style(' text-4xl text-white')}>{props.data}</Text>
        <Text style={tailwind.style(' text-sm text-white m-auto')}>days</Text>
      </View>
    ),
  }
  return (
    <View style={tailwind.style('flex flex-col my-4 mx-auto')}>
      <Text style={tailwind.style('text-xl text-black font-black m-auto')}>
        {props.title}
      </Text>
      <View
        style={tailwind.style(
          'm-auto mt-4 shadow-lg rounded-full p-4 h-28 w-28 bg-yellow-500'
        )}
      >
        {dataJSX[typeof props.data]}
      </View>
    </View>
  )
}
