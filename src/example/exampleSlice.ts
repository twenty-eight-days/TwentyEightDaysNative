import { createSlice, Draft } from '@reduxjs/toolkit'

interface ExampleState {
  readonly text: string
}

const initialState: ExampleState = {
  text: 'Hello There',
}

const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    randomizeText: (state: Draft<ExampleState>) => {
      const names = ['React', 'World', 'Everyone']
      const randomIndex = Math.floor(Math.random() * names.length)
      state.text = `Hello ${names[randomIndex]}`
    },
  },
})

export const exampleReducer = exampleSlice.reducer

export const { randomizeText } = exampleSlice.actions
