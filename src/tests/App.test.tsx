import 'react-native'
import React from 'react'

import renderer from 'react-test-renderer'
import { App } from '../App'
import { Button, ButtonImg } from '../view/components/buttons'
import { storage } from '../model/storage'

it('smoke test', () => {
  renderer.create(<App />)
})
it('test Buttons', () => {
  renderer.create(<Button onPress={() => {}} text={'Test'} />)
})
it('test ButtonsImg', () => {
  renderer.create(<ButtonImg onPress={() => {}} text={'Test'} src={require('../view/ressources/today.png')} />)
})
test('test storage read', () => {
  return storage.read().then(periods => {
    expect(typeof periods).toBe('object')
  })
})
test('test storage write', () => {
  return storage.write({ date: new Date() }).then(periods => {
    expect(typeof periods).toBe('object')
  })
})
