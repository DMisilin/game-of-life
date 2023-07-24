import React from 'react';
import { StyledBox } from './styles';
import { setBoxState } from '../../RTK/gameSlice';
import { useAppDispatch } from '../../RTK/hooks';

type BoxPropsType = { isLife: boolean; x: number; y: number };

const Box = ({ isLife, x, y }: BoxPropsType) => {
  const dispatch = useAppDispatch();

  const update = () => {
    dispatch(setBoxState({ x, y }));
  };

  return <StyledBox isLife={isLife} onClick={update} role="BoxRole" />;
};

export default Box;
