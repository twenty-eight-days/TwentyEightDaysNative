import React, { useEffect } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { RootState, read, write } from '../../controller/redux'
import tailwind from 'tailwind-react-native-classnames'
import { ButtonImg, Datepicker } from '../components/buttons'
import { PeriodTable } from '../components/periodTable'
import { useSelector } from 'react-redux'
import { Hero } from '../components/hero'
import { Period } from '../../model/storage'

export const TodayScreen = () => {
  const periods: Period[] = useSelector(
    (state: RootState) => state.storage.periods
  )
  // eslint is disabled because useEffects needs to only run once and eslint
  // doesn't compile the code with useEffect(()=>{},[])
  useEffect(() => {
    // eslint-disable-line
    read() // eslint-disable-line
  }, []) // eslint-disable-line
  return (
    <ScrollView style={tailwind.style('flex flex-col px-10 pt-10')}>
      <Hero periods={periods} />

      <View style={tailwind.style('flex flex-row my-5')}>
        <ButtonImg
          onPress={() => write({ date: new Date() })}
          text={'Today'}
          src={require('../ressources/white_today.png')}
        />
        <Datepicker
          onPress={(event, date) => {
            if (date !== undefined) {
              write({ date: date })
            }
          }}
        />
      </View>

      <Text style={tailwind.style('text-xl text-black')}>Last 4 Periods</Text>
      <PeriodTable periods={periods.slice(0, 4)} />
    </ScrollView>
  )
}
