import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {VideosResponse} from '../apiTypes';
import {MAIN_URL} from '../constants';
import {RootState} from './store';
const axios = require('axios');

interface ApiState {
  videos?: VideosResponse[];
  loading: 'idle' | 'loading' | 'succeeded' | 'failed';
  error?: string;
}

export const apiSlide = createSlice({
  name: 'api',
  initialState: {
    loading: 'idle',
  } as ApiState,
  reducers: {
    saveVideos: (state: ApiState, action: any) => {
      state.videos = [action.payload];
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getVideos.pending, (state: ApiState) => {
        state.loading = 'loading';
      })
      .addCase(getVideos.fulfilled, (state: ApiState, action) => {
        state.loading = 'succeeded';
        state.videos = action.payload;
      })
      .addCase(getVideos.rejected, (state: ApiState, action) => {
        state.loading = 'failed';
        state.error = action.error.message;
      });
  },
});

export const getVideos = createAsyncThunk('api/videos', async () => {
  const response = await axios.get(
    `${MAIN_URL}/XiteTV/frontend-coding-exercise/main/data/dataset.json`,
  );
  // The value we return becomes the `fulfilled` action payload
  return response.data;
});


export const videos = (state: RootState) => state.api.videos;
export const isLoading = (state: RootState) => state.api.loading;
export const error = (state: RootState) => state.api.error;
export const {saveVideos} = apiSlide.actions;
export default apiSlide.reducer;
