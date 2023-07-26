import reducer, {
  initialState,
  setRandom,
  setBoxState,
  nextTick,
  clearLand,
  modifySize,
} from './gameSlice';
import { generateLand } from '../helpers/methods';

describe('RTK', () => {
  test('Initial values', () => {
    expect(reducer(undefined, { type: undefined })).toEqual(initialState);
  });

  test('Set random action', () => {
    expect(reducer(undefined, setRandom)).not.toEqual(initialState);
  });

  test('Set next tick action', () => {
    const stateWithRandomBoxes = {
      width: 20,
      height: 20,
      boxesMatrix: generateLand(20, 20, true),
      running: false,
    };
    expect(reducer(stateWithRandomBoxes, nextTick)).not.toEqual(stateWithRandomBoxes);
  });

  test('Set clear action', () => {
    const stateWithRandomBoxes = {
      width: 20,
      height: 20,
      boxesMatrix: generateLand(20, 20, true),
      running: false,
    };
    expect(reducer(stateWithRandomBoxes, clearLand)).toEqual(initialState);
  });

  test('Set box state action', () => {
    expect(reducer(initialState, setBoxState({x: 0, y: 1}))).not.toEqual(initialState);

    expect(reducer({
      ...initialState,
      boxesMatrix: [[0, 0], [0, 0]],
    }, setBoxState({x: 0, y: 1}))).toEqual({
      ...initialState,
      boxesMatrix: [[0, 1], [0, 0]],
    });
  });

  test('Set modify size action', () => {
    expect(reducer(initialState, modifySize({value: 10}))).not.toEqual(initialState);
  });

  test('Set modify size action, check modified', () => {
    expect(reducer({
      ...initialState,
      width: 10,
      height: 10,
    }, modifySize({value: 10}))).toEqual({
      ...initialState,
      width: 10,
      height: 10,
    });
  });
});
