import { generateLand, landTick } from './methods';

describe('Methods tests', () => {
  test('generateLand, check matrix size', () => {
    const width = Math.round(Math.random() * 10);
    const height = Math.round(Math.random() * 10);
    const result = generateLand(width, height);

    expect(result.length).toBe(height);
  });

  test('generateLand, check length every line', () => {
    const width = Math.round(Math.random() * 10);
    const result = generateLand(width, 3);

    expect(result[0].length).toBe(width);
    expect(result[1].length).toBe(width);
    expect(result[2].length).toBe(width);
  });

  test('generateLand, all elements is 0', () => {
    const width = Math.round(Math.random() * 10);
    const result = generateLand(width, 3);

    const notNulls = result.reduce((acc, elm) => {
      const life = elm.filter(elm => elm > 0);
      return acc + life.length;
    }, 0);

    expect(notNulls).toBe(0);
  });

  test('generateLand, elements with random', () => {
    const width = Math.round(Math.random() * 10);
    const height = Math.round(Math.random() * 10);
    const result = generateLand(width, height, true);

    const notNulls = result.reduce((acc, elm) => {
      const life = elm.filter(elm => elm > 0);
      return acc + life.length;
    }, 0);

    expect(notNulls).not.toBe(0);
  });

  test('landTick, elements was updated', () => {
    const width = Math.round(Math.random() * 10);
    const height = Math.round(Math.random() * 10);

    const matrix = generateLand(width, height, true);
    const afterTick = landTick(matrix);

    expect(matrix).not.toEqual(afterTick);
  });

  test('landTick, Still lifes - Block', () => {
    const matrix = [
      [0,0,0,0],
      [0,1,1,0],
      [0,1,1,0],
      [0,0,0,0],
    ];
    const afterTick = landTick(matrix);
    expect(matrix).toEqual(afterTick);
  });

  test('landTick, Still lifes - Bee-hive', () => {
    const matrix = [
      [0,0,0,0,0,0],
      [0,0,1,1,0,0],
      [0,1,0,0,1,0],
      [0,0,1,1,0,0],
      [0,0,0,0,0,0],
    ];
    const afterTick = landTick(matrix);
    expect(matrix).toEqual(afterTick);
  });

  test('landTick, Still lifes - Loaf', () => {
    const matrix = [
      [0,0,0,0,0,0],
      [0,0,1,1,0,0],
      [0,1,0,0,1,0],
      [0,0,1,0,1,0],
      [0,0,0,1,0,0],
      [0,0,0,0,0,0],
    ];
    const afterTick = landTick(matrix);
    expect(matrix).toEqual(afterTick);
  });

  test('landTick, Still lifes - Boat', () => {
    const matrix = [
      [0,0,0,0,0],
      [0,1,1,0,0],
      [0,1,0,1,0],
      [0,0,1,0,0],
      [0,0,0,0,0],
    ];
    const afterTick = landTick(matrix);
    expect(matrix).toEqual(afterTick);
  });

  test('landTick, Still lifes - Boat', () => {
    const matrix = [
      [0,0,0,0,0],
      [0,0,1,0,0],
      [0,1,0,1,0],
      [0,0,1,0,0],
      [0,0,0,0,0],
    ];
    const afterTick = landTick(matrix);
    expect(matrix).toEqual(afterTick);
  });

  test('landTick, Oscillators - Blinker (period 1)', () => {
    const afterTick = landTick([
      [0,0,0,0,0],
      [0,0,0,0,0],
      [0,1,1,1,0],
      [0,0,0,0,0],
      [0,0,0,0,0],
    ]);
    expect(afterTick).toEqual([
      [0,0,0,0,0],
      [0,0,1,0,0],
      [0,0,1,0,0],
      [0,0,1,0,0],
      [0,0,0,0,0],
    ]);
  });

  test('landTick, Oscillators - Blinker (period 2)', () => {
    const afterTick = landTick([
      [0,0,0,0,0],
      [0,0,1,0,0],
      [0,0,1,0,0],
      [0,0,1,0,0],
      [0,0,0,0,0],
    ]);
    expect(afterTick).toEqual([
      [0,0,0,0,0],
      [0,0,0,0,0],
      [0,1,1,1,0],
      [0,0,0,0,0],
      [0,0,0,0,0],
    ]);
  });

  test('landTick, Oscillators - Blinker (period 1)', () => {
    const afterTick = landTick([
      [0,0,0,0,0,0],
      [0,0,0,0,0,0],
      [0,0,1,1,1,0],
      [0,1,1,1,0,0],
      [0,0,0,0,0,0],
    ]);
    expect(afterTick).toEqual([
      [0,0,0,0,0,0],
      [0,0,0,1,0,0],
      [0,1,0,0,1,0],
      [0,1,0,0,1,0],
      [0,0,1,0,0,0],
    ]);
  });

  test('landTick, Oscillators - Blinker (period 2)', () => {
    const afterTick = landTick([
      [0,0,0,0,0,0],
      [0,0,0,1,0,0],
      [0,1,0,0,1,0],
      [0,1,0,0,1,0],
      [0,0,1,0,0,0],
    ]);
    expect(afterTick).toEqual([
      [0,0,0,0,0,0],
      [0,0,0,0,0,0],
      [0,0,1,1,1,0],
      [0,1,1,1,0,0],
      [0,0,0,0,0,0],
    ]);
  });

  test('landTick, Oscillators - Beacon (period 1)', () => {
    const afterTick = landTick([
      [0,0,0,0,0,0],
      [0,1,1,0,0,0],
      [0,1,1,0,0,0],
      [0,0,0,1,1,0],
      [0,0,0,1,1,0],
      [0,0,0,0,0,0],
    ]);
    expect(afterTick).toEqual([
      [0,0,0,0,0,0],
      [0,1,1,0,0,0],
      [0,1,0,0,0,0],
      [0,0,0,0,1,0],
      [0,0,0,1,1,0],
      [0,0,0,0,0,0],
    ]);
  });

  test('landTick, Oscillators - Beacon (period 2)', () => {
    const afterTick = landTick([
      [0,0,0,0,0,0],
      [0,1,1,0,0,0],
      [0,1,0,0,0,0],
      [0,0,0,0,1,0],
      [0,0,0,1,1,0],
      [0,0,0,0,0,0],
    ]);
    expect(afterTick).toEqual([
      [0,0,0,0,0,0],
      [0,1,1,0,0,0],
      [0,1,1,0,0,0],
      [0,0,0,1,1,0],
      [0,0,0,1,1,0],
      [0,0,0,0,0,0],
    ]);
  });
});
