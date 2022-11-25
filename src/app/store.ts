import { configureStore } from '@reduxjs/toolkit'
import boardReducer from './boardSlice'
import modalReducer from './modalSlice'

export const store = configureStore({
  reducer: {
    boardState: boardReducer,
    modalState: modalReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
