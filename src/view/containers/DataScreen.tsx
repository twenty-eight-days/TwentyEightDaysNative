import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import tailwind from 'tailwind-react-native-classnames'
import { Period, storage } from '../../model/storage'
import { cycleDuration } from '../../controller/calculate'

export const DataScreen = () => {
  const [periods, setPeriods] = useState<Period[]>([])
  const nextPeriod = new Date()
  nextPeriod.setDate(nextPeriod.getDate())
  useEffect(() => {
    storage.read().then(p => setPeriods(p))
  }, [])
  return (
    <View style={tailwind.style('flex flex-col p-10')}>
      <Text style={tailwind.style('m-auto text-2xl my-auto')}>DATA SCREEN</Text>
      <Text style={tailwind.style('text-2xl')}>Cycle durations:</Text>
      {cycleDuration(periods).map((duration)=>{return <Text>{duration} days</Text>})}
    </View>
  )
}
