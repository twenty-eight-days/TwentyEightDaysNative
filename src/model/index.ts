import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import { counterReducer } from './exampleSlice'

export const rootReducer = combineReducers({
  example: counterReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export const createStore = () =>
  configureStore({
    reducer: rootReducer,
  })

export const store = createStore()

export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()

export const useAppSelector = <T>(selector: (state: RootState) => T): T =>
  useSelector<RootState, T>(selector)
