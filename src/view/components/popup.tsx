import React from 'react'
import { Text, View } from 'react-native'
import { Button } from './buttons'
import { notShow, RootState } from '../../controller/redux'
import { useDispatch, useSelector } from 'react-redux'
import tailwind from 'tailwind-react-native-classnames'

export function Popup() {
  const text = useSelector((state: RootState) => state.popup.popupMessage)
  const dispatch = useDispatch()
  return (
    <View
      style={{
        elevation: 50,
        zIndex: 50,
        position: 'absolute',
        top: '20%',
        left: '10%',
        width: '80%',
        backgroundColor: 'white',
        padding: 30,
        borderRadius: 20,
      }}
    >
      <Text style={tailwind.style('text-black text-xl')}>{text}</Text>
      <View style={tailwind.style('m-auto mt-5')}>
        <Button onPress={() => dispatch(notShow())} text={'Close'} />
      </View>
    </View>
  )
}
