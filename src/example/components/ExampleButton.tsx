import React from 'react'
import { Button } from 'react-native'

interface Props {
  readonly title: string
  readonly onPress: () => void
}

export const ExampleButton = ({ title, onPress }: Props) => {
  return <Button title={title} onPress={onPress} />
}
