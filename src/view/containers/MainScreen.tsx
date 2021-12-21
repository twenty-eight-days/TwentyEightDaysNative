import React, { useEffect } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { storage } from '../../model/storage'
import tailwind from 'tailwind-react-native-classnames'
import { Datepicker } from '../components/datePicker'
import { ButtonImg } from '../components/buttons'
import { PeriodTable } from '../components/periodTable'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, write } from '../../controller/redux'
import { Hero } from '../components/hero'

export const MainScreen = () => {
  const periods = useSelector((state: RootState) => state.storage.periods)
  const dispatch = useDispatch()
  useEffect(() => {
    // eslint-disable-line
    storage.read().then(p => dispatch(write(p))) // eslint-disable-line
  }, []) // eslint-disable-line
  return (
    <ScrollView style={tailwind.style('flex flex-col px-10 pt-10')}>
      <Hero periods={periods} />
      <View style={tailwind.style('flex flex-row my-5')}>
        <ButtonImg
          onPress={() => {
            storage.write({ date: new Date() }).then(p => dispatch(write(p)))
          }}
          text={'Today'}
          src={require('../ressources/white_today.png')}
        />
        <Datepicker
          onPress={(event, date) => {
            if (date !== undefined) {
              storage.write({ date: date }).then(p => dispatch(write(p)))
            }
          }}
        />
      </View>
      <Text style={tailwind.style('text-xl text-black')}>Last Periods</Text>
      <View style={tailwind.style('h-full')}>
        <PeriodTable periods={periods.slice(0, 4)} dispatch={dispatch} />
      </View>
    </ScrollView>
  )
}
