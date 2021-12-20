import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Period } from '../model/storage'

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

const initialState: { periods: { date: Date }[] } = {
  periods: [{ date: new Date() }],
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
export const { write, remove } = periodSlice.actions
export default periodSlice.reducer

export const store = configureStore({
  reducer: {
    storage: periodSlice.reducer,
  },
})
