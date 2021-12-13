import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import { render, waitFor , fireEvent} from 'react-native-testing-library'
import { App } from '../App'
import { Button, ButtonImg } from '../view/components/buttons'
import { Period, storage } from '../model/storage'
import {
  averageDuration,
  currentDuration,
  cycleDuration, deviationDuration
} from "../controller/calculate";
import {Datepicker} from "../view/components/datePicker";
import {PeriodTable} from "../view/components/periodTable";
import {MainScreen} from "../view/containers/MainScreen";
import {DataScreen} from "../view/containers/DataScreen";
import {Footer} from "../view/containers/Footer";

test('smoketest', async () => {
  await waitFor(() => render(<App />))
})
test('test Data Screen', async () => {
  await waitFor(() => render(<DataScreen />))
})
test('test Footer', async () => {
  const setMain = function (jsx: JSX.Element) {}
  const {getByText} = await waitFor(
      ()=>render(
          <Footer setMain={setMain}/>
      )
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
    let activated = false
    const {getByTestId, getByText, queryByTestId, toJSON} = await waitFor(
        ()=>render(
        <Datepicker  onPress={() => activated = true}/>
      )
    )
    getByText('Date')
  }
  finally {
    expect(true).toBe(true)
  }
})
test('test Period Table', async () => {
  const periods: Period[] = [
    { date: new Date(2021, 1, 5) },
    { date: new Date(2021, 1, 1) },
  ]
  function setPeriods(periods: Period[]) {
    console.log("Triggered")
  }
  const {getByText} = await waitFor(
      ()=>render(
          <PeriodTable periods={periods} setPeriods={setPeriods}/>
      )
  )
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
  const date = new Date(2021, 1, 1)
  return storage.read().then((periods) => {
    expect(periods.length).toBe(2)
  })
})
test('test storage write', () => {
  const date = new Date(2021, 1, 10)
  return storage.write( {date: date}).then((periods) => {
    expect(periods.length).toBe(3)
  })
})
test('test storage write duplicate', () => {
  const date = new Date(2021, 1, 1)
  return storage.write( {date: date}).then((periods) => {
    expect(periods.length).toBe(2)
  })
})
test('test storage remove', () => {
  const date = new Date(2021, 1, 1)
  return storage.delete( {date: date}).then((periods) => {
    expect(periods.length).toBe(2)
  })
})
