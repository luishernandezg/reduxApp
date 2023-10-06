import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import counterReducer from '../features/counter/redux/counterSlice';
import imageListSlice from '../features/image-list/redux/imageListSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    imageList: imageListSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
