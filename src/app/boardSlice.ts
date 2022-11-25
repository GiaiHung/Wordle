import { createSlice } from '@reduxjs/toolkit'
import words from '../assets/words.json'

export interface CounterState {
  board: string[]
  position: number
  checkPosition: number
  row: number
  correctWord: string
}

let randomNumber = Math.round(Math.random() * words.words.length)

const initialState: CounterState = {
  board: [
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
  ],
  position: 0,
  checkPosition: -1, // Ranging from 0 to 4
  row: 0,
  correctWord: words.words[randomNumber].toUpperCase(),
}

export const boardSlice = createSlice({
  name: 'boardSlice',
  initialState,
  reducers: {
    setBoard: (state, action) => {
      state.board = action.payload
    },
    increasePosition: (state) => {
      state.position += 1
    },
    decreasePosition: (state) => {
      state.position -= 1
    },
    increaseRow: (state) => {
      state.row += 1
    },
    decreaseRow: (state) => {
      state.row -= 1
    },
    increaseCheckPosition: (state) => {
      state.checkPosition += 1
    },
    resetCheckPosition: (state) => {
      state.checkPosition = -1
    },
    playAgain: (state) => {
      let randomNumber = Math.round(Math.random() * words.words.length)
      state.correctWord = words.words[randomNumber].toUpperCase()
      state.position = 0
      state.checkPosition = 0
      state.row = 0
    },
  },
})

// Action creators are generated for each case reducer function
export const {
  setBoard,
  increasePosition,
  decreasePosition,
  increaseRow,
  decreaseRow,
  increaseCheckPosition,
  resetCheckPosition,
  playAgain,
} = boardSlice.actions

export default boardSlice.reducer
