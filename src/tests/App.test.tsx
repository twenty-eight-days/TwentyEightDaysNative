import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import { render, waitFor, fireEvent } from 'react-native-testing-library'
import { App } from '../App'
import { Button, ButtonImg } from '../view/components/buttons'
import { Period, storage } from '../model/storage'
import {
  averageDuration,
  currentDuration,
  cycleDuration,
  deviationDuration,
} from '../controller/calculate'
import { Datepicker } from '../view/components/datePicker'
import { PeriodTable } from '../view/components/periodTable'
import { DataScreen } from '../view/containers/DataScreen'
import { Footer } from '../view/containers/Footer'
import { store } from '../controller/redux'
import { Provider } from 'react-redux'

test('smoketest', async () => {
  await waitFor(() => render(<App />))
})
test('test Data Screen', async () => {
  await waitFor(() =>
    render(
      <Provider store={store}>
        <DataScreen />
      </Provider>
    )
  )
})
test('test Footer', async () => {
  const setMain = function () {}
  const { getByText } = await waitFor(() =>
    render(<Footer setMain={setMain} />)
  )
  const periodItem = getByText('Today')
  fireEvent.press(periodItem)
})
test('test Buttons', () => {
  renderer.create(<Button onPress={() => {}} text={'Test'} />)
})
test('test ButtonsImg', () => {
  renderer.create(
    <ButtonImg
      onPress={() => {}}
      text={'Test'}
      src={require('../view/ressources/today.png')}
    />
  )
})
test('test DatePicker', async () => {
  try {
    const { getByText } = await waitFor(() =>
      render(<Datepicker onPress={() => {}} />)
    )
    getByText('Date')
  } finally {
    expect(true).toBe(true)
  }
})
test('test Period Table', async () => {
  const periods: Period[] = [
    { date: new Date(2021, 1, 5) },
    { date: new Date(2021, 1, 1) },
  ]
  const { getByText } = await waitFor(() => {
    const dispatch = store.dispatch
    return render(<PeriodTable periods={periods} dispatch={dispatch} />)
  })
  const periodItem = getByText('Mon Feb 01 2021')
  fireEvent.press(periodItem)
})
test('cycleDuration', () => {
  const periods: Period[] = [
    { date: new Date(2021, 1, 5) },
    { date: new Date(2021, 1, 1) },
  ]
  expect(cycleDuration([]).length).toBe(0)
  expect(cycleDuration(periods)[0]).toBe(4)
})
test('current Duration', () => {
  expect(currentDuration(new Date())).toBe(0)
})
test('test average Duration', () => {
  const periods: Period[] = [
    { date: new Date(2021, 1, 9) },
    { date: new Date(2021, 1, 5) },
    { date: new Date(2021, 1, 1) },
  ]
  expect(averageDuration(periods)).toBe(4)
})
test('test deviation Duration', () => {
  const periods: Period[] = [
    { date: new Date(2021, 1, 9) },
    { date: new Date(2021, 1, 5) },
    { date: new Date(2021, 1, 1) },
  ]
  expect(deviationDuration(periods)).toBe(0)
})
test('test storage read', () => {
  return storage.read().then(periods => {
    expect(periods.length).toBe(2)
  })
})
test('test storage write', () => {
  const date = new Date(2021, 1, 10)
  return storage.write({ date: date }).then(periods => {
    expect(periods.length).toBe(3)
  })
})
test('test storage write duplicate', () => {
  const date = new Date(2021, 1, 1)
  return storage.write({ date: date }).then(periods => {
    expect(periods.length).toBe(2)
  })
})
test('test storage remove', () => {
  const date = new Date(2021, 1, 1)
  return storage.delete({ date: date }).then(periods => {
    expect(periods.length).toBe(2)
  })
})
