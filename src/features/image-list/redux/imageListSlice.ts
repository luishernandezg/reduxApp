import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../../app/store';
import {ImageEntity} from '../entities/image';
import {getImageList} from '../api/album';

interface ImageListState {
  listImage: ImageEntity[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: null | string | undefined;
}

const initialState: ImageListState = {
  listImage: [],
  status: 'idle',
  error: null,
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const fetchImages = createAsyncThunk(
  'imageList/fetchImages',
  async () => {
    const response = await getImageList();
    return response;
  },
);

export const imageListSlice = createSlice({
  name: 'imageList',
  initialState,
  reducers: {
    // increment: state => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.value += 1;
    // },
    // decrement: state => {
    //   state.value -= 1;
    // },
    // // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchImages.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchImages.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.listImage = action.payload;
      })
      .addCase(fetchImages.rejected, (state, action) => {
        state.status = 'succeeded';
        state.error = action.error.message;
      });
  },
});

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectImageList = (state: RootState) => state.imageList;

export default imageListSlice.reducer;
