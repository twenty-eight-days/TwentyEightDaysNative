import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Period, storage } from '../model/storage'

const initialState = {
  periods: [{ date: new Date() }],
  popupIsVisible: false,
  popupMessage: 'This is a Popup',
}
const periodSlice = createSlice({
  name: 'periods',
  initialState,
  reducers: {
    write: (state, action: PayloadAction<Period[]>) => {
      state.periods = action.payload
    },
    remove: (state, action: PayloadAction<Period>) => {
      const updatedPeriods = []
      for (let period of state.periods) {
        if (period.date.toDateString() !== action.payload.date.toDateString()) {
          updatedPeriods.push(period)
        }
      }
      state.periods = updatedPeriods
    },
  },
})
const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    show: state => {
      state.popupIsVisible = true
    },
    notShow: state => {
      state.popupIsVisible = false
    },
    setText: (state, action: PayloadAction<string>) => {
      state.popupMessage = action.payload
    },
  },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const store = configureStore({
  reducer: {
    storage: periodSlice.reducer,
    popup: popupSlice.reducer,
  },
})
export const { show, notShow, setText } = popupSlice.actions

// writing and reading to disc is async
// redux docent support async operations inside Slice
// they need to be performed outside of redux and written back in an async callback
export function read() {
  const { write } = periodSlice.actions
  storage.read().then(p => store.dispatch(write(p)))
}
export function write(periods: Period) {
  const { write } = periodSlice.actions
  storage.write(periods).then(p => store.dispatch(write(p)))
}
export function remove(item: Period) {
  const { write } = periodSlice.actions
  storage.delete(item).then(periods => store.dispatch(write(periods)))
}
