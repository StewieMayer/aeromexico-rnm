import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from './features/api/baseApi';
import charactersReducer from './features/characters/charactersSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      characters: charactersReducer,
      [baseApi.reducerPath]: baseApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(baseApi.middleware),
  });
};

// Tipos para el store, estado y dispatch
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];