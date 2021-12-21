import { Text, View, TouchableHighlight } from 'react-native'
import React from 'react'
import tailwind from 'tailwind-react-native-classnames'
import { notShow, RootState, setText, show } from '../../controller/redux'
import { useSelector, useDispatch } from 'react-redux'

export function Statistic(props: {
  title: string
  data: number | JSX.Element[]
  style?: string
  info?: string
}) {
  let style = props.style
  if (props.style === undefined) {
    style = ''
  }

  const popup = useSelector((state: RootState) => state.popup.visible)
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
        toggle(popup)
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
