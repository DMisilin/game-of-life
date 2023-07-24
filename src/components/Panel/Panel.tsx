import React from 'react';
import Button from '../Button/Button';
import { clearLand, nextTick, setRandom } from '../../RTK/gameSlice';
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

  return (
    <div className="buttonPanel" role="PanelRole">
      <Button name="next" text="Next" click={next} />
      <Button name="run" text="Run" click={run} />
      <Button name="stop" text="Stop" click={stop} />
      <Button name="clear" text="Clear" click={clear} />
      <Button name="random" text="Random" click={random} />
    </div>
  );
};

export default Panel;
