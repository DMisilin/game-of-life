import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { generateLand, landTick } from '../helpers/methods';

export const initialState = {
  width: 20,
  height: 20,
  boxesMatrix: generateLand(20, 20),
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
      state.boxesMatrix = generateLand(state.width, state.height);
    },
    nextTick: (state = initialState) => {
      state.boxesMatrix = landTick(state.boxesMatrix);
    },
    modifySize: (state = initialState, action) => {
      state.width = action.payload.value;
      state.height = action.payload.value;
    },
    setRandom: (state = initialState) => {
      state.boxesMatrix = generateLand(state.width, state.height, true);
    },
  },
});

export const { setBoxState, nextTick, clearLand, setRandom, modifySize } =
  gameSlice.actions;

export default gameSlice.reducer;
