import { createSlice } from '@reduxjs/toolkit'

export interface ModalState {
  isOpen: boolean
  title: string
  content: string
  isGuide: boolean
}

const initialState: ModalState = {
  isOpen: false,
  title: '',
  content: '',
  isGuide: false,
}

export const modalSlice = createSlice({
  name: 'modalSlice',
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    setTitle: (state, action) => {
      state.title = action.payload
    },
    setContent: (state, action) => {
      state.content = action.payload
    },
    setIsGuide: (state, action) => {
      state.isGuide = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { open, close, setTitle, setContent, setIsGuide } = modalSlice.actions

export default modalSlice.reducer
