import React from 'react';
import { setBoxState } from 'src/RTK/gameSlice';
import { StyledBox } from 'components/Box/styles';
import { useAppDispatch } from 'src/RTK/store';

type BoxPropsType = { isLife: boolean; x: number; y: number };

const Box = ({ isLife, x, y }: BoxPropsType) => {
  const dispatch = useAppDispatch();

  const update = () => {
    dispatch(setBoxState({ x, y }));
  };

  return <StyledBox isLife={isLife} onClick={update} />;
};

export default Box;
