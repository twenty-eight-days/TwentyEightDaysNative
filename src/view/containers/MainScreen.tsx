import React, { useEffect } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { storage } from '../../model/storage'
import tailwind from 'tailwind-react-native-classnames'
import { Datepicker } from '../components/datePicker'
import { ButtonImg } from '../components/buttons'
import { PeriodTable } from '../components/periodTable'
import { currentDuration, expectedDate } from '../../controller/calculate'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, write } from '../../controller/redux'

export const MainScreen = () => {
  const periods = useSelector((state: RootState) => state.storage.periods)
  const dispatch = useDispatch()
  useEffect(() => {
    // eslint-disable-line
    storage.read().then(p => dispatch(write(p))) // eslint-disable-line
  }, []) // eslint-disable-line
  return (
    <View style={tailwind.style('flex flex-col m-10 mb-32')}>
      <View
        style={tailwind.style(
          'flex flex-row flex-wrap bg-pink-200 p-4 rounded-xl shadow-xl'
        )}
      >
        <Text style={tailwind.style('text-xl text-black')}>Expected</Text>
        <Text style={tailwind.style('text-xl text-black ml-auto font-black')}>
          {expectedDate(
            periods.length !== 0 ? periods[0].date : new Date()
          ).toDateString()}
        </Text>
        <Text style={tailwind.style('text-xl text-black')}>
          Current cycle day
        </Text>
        <Text style={tailwind.style('text-4xl text-black ml-auto font-black')}>
          {currentDuration(periods.length !== 0 ? periods[0].date : new Date())}
        </Text>
      </View>
      <View style={tailwind.style('flex flex-row  my-5')}>
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
      <ScrollView style={tailwind.style('h-full')}>
        <PeriodTable periods={periods} dispatch={dispatch} />
      </ScrollView>
    </View>
  )
}
