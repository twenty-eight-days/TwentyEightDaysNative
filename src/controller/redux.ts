import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Period } from '../model/storage'

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

const initialState = {
  periods: [{ date: new Date() }],
  visible: false,
  popup: 'This is a Popup',
}
export const periodSlice = createSlice({
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
export const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    show: state => {
      state.visible = true
    },
    notShow: state => {
      state.visible = false
    },
    setText: (state, action: PayloadAction<string>) => {
      state.popup = action.payload
    },
  },
})
export const { write, remove } = periodSlice.actions
export const { show, notShow, setText } = popupSlice.actions
//export default periodSlice.reducer

export const store = configureStore({
  reducer: {
    storage: periodSlice.reducer,
    popup: popupSlice.reducer,
  },
})
