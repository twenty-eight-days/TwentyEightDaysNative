import React from 'react'
import { ExampleButton as ExampleButtonComponent } from '../components/ExampleButton'
import { useAppDispatch, useAppSelector } from '../../store'
import { randomizeText } from '../exampleSlice'

export const ExampleButton = () => {
  const title = useAppSelector(s => s.example.text)
  const dispatch = useAppDispatch()
  const onPress = () => dispatch(randomizeText())
  return <ExampleButtonComponent title={title} onPress={onPress} />
}
