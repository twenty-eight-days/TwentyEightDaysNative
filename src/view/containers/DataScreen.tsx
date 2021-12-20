import React, { useEffect, useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import tailwind from 'tailwind-react-native-classnames'
import { Period, storage } from '../../model/storage'
import { averageDuration, deviationDuration } from '../../controller/calculate'
import { PeriodTable } from '../components/periodTable'
import { useDispatch } from 'react-redux'

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
        <Statistic title={'Average'} data={averageDuration(periods)} />
        <Statistic
          title={'Deviation'}
          data={deviationDuration(periods)}
          style={'ml-auto'}
        />
      </View>
      <View style={tailwind.style('h-full')}>
        <Text style={tailwind.style('text-xl text-black')}>Periods</Text>
        <PeriodTable periods={periods} dispatch={dispatch} />
      </View>
    </ScrollView>
  )
}
function Statistic(props: {
  title: string
  data: number | JSX.Element[]
  style?: string
}) {
  let style = props.style
  if (props.style === undefined) {
    style = ''
  }
  return (
    <View style={tailwind.style('flex flex-col my-4 mx-auto ' + style)}>
      <Text style={tailwind.style('text-xl text-black font-black m-auto')}>
        {props.title}
      </Text>
      <View
        style={tailwind.style(
          'm-auto mt-4 shadow-lg rounded-full p-2 h-20 w-20 bg-yellow-500'
        )}
      >
        <View style={tailwind.style('m-auto')}>
          <Text style={tailwind.style('mx-auto text-xl text-white')}>
            {props.data}
          </Text>
          <Text style={tailwind.style('text-sm text-white m-auto')}>days</Text>
        </View>
      </View>
    </View>
  )
}
