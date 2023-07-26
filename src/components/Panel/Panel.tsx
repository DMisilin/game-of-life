import React from 'react';
import Button from '../Button/Button';
import { clearLand, modifySize, nextTick, setRandom } from '../../RTK/gameSlice';
import { useAppDispatch } from '../../RTK/hooks';
import './Panel.css';

const Panel = () => {
  const dispatch = useAppDispatch();
  let timer;

  const next = () => {
    dispatch(nextTick());
  };

  const run = () => {
    timer = setInterval(() => {
      next();
    }, 400);
  };

  const stop = () => {
    clearInterval(timer);
  };

  const clear = () => {
    dispatch(clearLand());
  };

  const random = () => {
    dispatch(setRandom());
  };

  const setSize = (value: number) => {
    dispatch(modifySize({ value }));
    dispatch(clearLand());
  };

  return (
    <div className="buttonPanel" role="PanelRole">
      <Button name="next" text="Next" click={next} />
      <Button name="run" text="Run" click={run} />
      <Button name="stop" text="Stop" click={stop} />
      <Button name="clear" text="Clear" click={clear} />
      <Button name="random" text="Random" click={random} />
      <Button name="15" text="20x20" click={() => setSize(20)} />
      <Button name="20" text="25x25" click={() => setSize(25)} />
      <Button name="25" text="35x35" click={() => setSize(35)} />
    </div>
  );
};

export default Panel;
