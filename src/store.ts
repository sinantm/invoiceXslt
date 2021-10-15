import { configureStore } from '@reduxjs/toolkit'
import themeReducers from './pages/theme/reducers'
import notesReducers from './pages/notes/reducers'
import companyInfoReducers from './pages/companyInfo/reducers'
import bankInfoReducers from './pages/bankInfo/reducers'
// ...

export const store: any = configureStore({
  reducer: {
    theme: themeReducers,
    notes: notesReducers,
    companyInfo: companyInfoReducers,
    bankInfo: bankInfoReducers
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

