import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
  count: number;
  isReady: boolean;
}

const initialState: CounterState = {
  count: 5,
  isReady: false,
}

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    initCounterState: (state, action: PayloadAction<number>) => {
      if (state.isReady) return;

      state.count = action.payload;
      state.isReady = true;
    },
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      if (state.count <= 0) return;
      state.count -= 1;
    },
    reset: (state) => {
      state.count = initialState.count;
    },
    setCount: (state, action) => {
      if (typeof action.payload !== 'number') {
        console.error('Payload must be a number');
        return;
      }
      if (action.payload < 0) {
        console.error('Count cannot be set to a negative number');
        return;
      }
      state.count = action.payload;
    }
  }
});

export const { increment, decrement, reset, setCount, initCounterState } = counterSlice.actions

export default counterSlice.reducer
