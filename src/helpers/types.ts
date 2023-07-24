type GameSlice = {
  boxesMatrix: number[][];
  running: boolean;
};

export type StateType = {
  game: GameSlice;
};
