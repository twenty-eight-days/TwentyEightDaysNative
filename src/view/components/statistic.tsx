import { Text, View, TouchableHighlight, Dimensions } from 'react-native'
import React from 'react'
import tailwind from 'tailwind-react-native-classnames'
import { notShow, RootState, setText, show } from '../../controller/redux'
import { useSelector, useDispatch } from 'react-redux'
import { cycleDuration } from '../../controller/calculate'
import { LineChart } from 'react-native-chart-kit'
import { Period } from '../../model/storage'

export function DayCircle(props: {
  title: string
  data: number | JSX.Element[]
  style?: string
  info?: string
}) {
  let style = props.style
  if (props.style === undefined) {
    style = ''
  }

  const popupIsVisible = useSelector(
    (state: RootState) => state.popup.popupIsVisible
  )
  const dispatch = useDispatch()

  function toggle(boolean: boolean) {
    dispatch(setText(props.info === undefined ? '' : props.info))
    if (boolean) {
      return dispatch(notShow())
    } else {
      return dispatch(show())
    }
  }
  return (
    <TouchableHighlight
      onPress={() => {
        toggle(popupIsVisible)
      }}
      underlayColor={'#fbf1f7'}
      style={tailwind.style('flex flex-col my-4 mx-auto ' + style)}
    >
      <View>
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
            <Text style={tailwind.style('text-sm text-white m-auto')}>
              days
            </Text>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  )
}
export function PeriodsChart(props: { periods: Period[] }) {
  return (
    <LineChart
      data={{
        labels: props.periods
          .map(p => p.date.toDateString().split(' ').splice(1, 2).join(' '))
          .splice(0, 5),
        datasets: [{ data: cycleDuration(props.periods).splice(0, 5) }],
      }}
      width={Dimensions.get('window').width * 0.8}
      height={220}
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
  )
}
