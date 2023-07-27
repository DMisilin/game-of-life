export const landTick = (life: number[][]) => {
  const newLife = [];

  for (let i = 0; i < life.length; i++) {
    const rowLife = life[i];
    const newLifeRow = [];

    for (let j = 0; j < rowLife.length; j++) {
      const cell = rowLife[j];
      const aa = life[i - 1];
      const cc = life[i + 1];

      let a1 = 0;
      let a2 = 0;
      let a3 = 0;
      const b1 = rowLife[j - 1] ? 1 : 0;
      const b3 = rowLife[j + 1] ? 1 : 0;
      let c1 = 0;
      let c2 = 0;
      let c3 = 0;

      if (aa && aa.length) {
        a1 = aa[j - 1] ? 1 : 0;
        a2 = aa[j] ? 1 : 0;
        a3 = aa[j + 1] ? 1 : 0;
      }

      if (cc && cc.length) {
        c1 = cc[j - 1] ? 1 : 0;
        c2 = cc[j] ? 1 : 0;
        c3 = cc[j + 1] ? 1 : 0;
      }

      const neighbors = a1 + a2 + a3 + b1 + b3 + c1 + c2 + c3;

      if (cell && neighbors < 2) {
        newLifeRow.push(0);
      } else if (cell && neighbors >= 2 && neighbors <= 3) {
        newLifeRow.push(1);
      } else if (cell && neighbors > 3) {
        newLifeRow.push(0);
      } else if (!cell && neighbors === 3) {
        newLifeRow.push(1);
      } else {
        newLifeRow.push(0);
      }
    }

    newLife.push(newLifeRow);
  }

  return newLife;
};

export const generateLand = (
  width = 10,
  height = 10,
  random = false,
): number[][] => {
  const result = [];

  for (let i = 0; i < height; i++) {
    const row = [];
    for (let j = 0; j < width; j++) {
      row.push(random ? Math.round(Math.random()) : 0);
    }

    result.push(row);
  }

  return result;
};

export const getRandomColor = () => {
  const colors = ['#557A95', '#7395AE', '#557A95'];
  const index = Math.round(Math.random() * colors.length - 1);
  return colors[index] || '#7395AE';
};
