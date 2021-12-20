import React, { useEffect } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { Period, storage } from '../../model/storage'
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
    <ScrollView style={tailwind.style('flex flex-col m-10')}>
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
      <PeriodTable periods={periods.slice(0, 4)} dispatch={dispatch} />
    </ScrollView>
  )
}
const Hero = (props: { periods: Period[] }) => {
  return (
    <View
      style={tailwind.style(
        'flex flex-col flex-wrap bg-pink-200 p-4 rounded-xl shadow-xl'
      )}
    >
      <View style={tailwind.style('flex flex-row')}>
        <Text style={tailwind.style('text-black')}>Expected</Text>
        <Text style={tailwind.style('text-black ml-auto font-black')}>
          {expectedDate(
            props.periods.length !== 0 ? props.periods[0].date : new Date()
          ).toDateString()}
        </Text>
      </View>
      <View style={tailwind.style('flex flex-col')}>
        <Text style={tailwind.style('text-black my-auto')}>
          Current cycle day
        </Text>
        <Text style={tailwind.style('text-4xl text-black font-black m-auto')}>
          {currentDuration(
            props.periods.length !== 0 ? props.periods[0].date : new Date()
          )}
        </Text>
      </View>
    </View>
  )
}
