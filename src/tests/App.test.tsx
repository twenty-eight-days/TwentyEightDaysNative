import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import { render, waitFor } from 'react-native-testing-library'
import { App } from '../App'
import { Button, ButtonImg } from '../view/components/buttons'
import { storage } from '../model/storage'

test('it updates content on successful call', async () => {
  await waitFor(() => render(<App />))
})
it('test Buttons', () => {
  renderer.create(<Button onPress={() => {}} text={'Test'} />)
})
it('test ButtonsImg', () => {
  renderer.create(<ButtonImg onPress={() => {}} text={'Test'} src={require('../view/ressources/today.png')} />)
})
test('test storage read', () => {
  const date = new Date()
  return storage
    .write({ date: date })
    .then(periods => {
      expect(periods.length).toBe(1)
      return storage.read()
    })
    .then(periods => {
      expect(periods[0].date.getUTCDate()).toBe(date.getUTCDate())
    })
    .then(() => {
      storage.delete({ date: date }).then(periods => {
        expect(periods.length).toBe(1)
      })
    })
})
