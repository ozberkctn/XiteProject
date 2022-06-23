import {Action, configureStore} from '@reduxjs/toolkit';
import apiSlide from './api-slice';
import {ThunkAction} from 'redux-thunk';

export const store = configureStore({
  reducer: {
    api: apiSlide,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
