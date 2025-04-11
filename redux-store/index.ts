import { configureStore } from '@reduxjs/toolkit'
import { cardsApiSlice } from './cards/CardsSlice'
export const store = configureStore({
  reducer: {
    [cardsApiSlice.reducerPath]: cardsApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cardsApiSlice.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch