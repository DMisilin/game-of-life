import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { generateLand, landTick } from 'src/helpers/methods';

const initialState = {
  width: 10,
  boxesMatrix: generateLand(10, 10),
  running: false,
};

export const gameSlice = createSlice({
  name: 'gameSlice',
  initialState,
  reducers: {
    setBoxState: (
      state = initialState,
      action: PayloadAction<{ x: number; y: number }>,
    ) => {
      const { x, y } = action.payload;
      const value = state.boxesMatrix[x][y];
      state.boxesMatrix[x][y] = value ? 0 : 1;
    },
    clearLand: (state = initialState) => {
      state.boxesMatrix = generateLand(10, 10);
    },
    nextTick: (state = initialState) => {
      state.boxesMatrix = landTick(state.boxesMatrix);
    },
    modifyRunning: (state = initialState, action) => {
      state.running = action.payload;
    },
    setRandom: (state = initialState) => {
      state.boxesMatrix = generateLand(10, 10, true);
    },
  },
});

export const { setBoxState, nextTick, modifyRunning, clearLand, setRandom } =
  gameSlice.actions;

// export const selectCount = (state: RootState) => state.counter.value;

export default gameSlice.reducer;
