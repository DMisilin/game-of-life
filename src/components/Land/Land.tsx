import React from 'react';
import { StateType } from 'src/helpers/types';
import { Row } from '../Row';
import './Land.css';
import { useAppSelector } from '../../RTK/hooks';

const Land = () => {
  const matrix = useAppSelector((state: StateType) => {
    return state.game.boxesMatrix;
  });

  return (
    <div className="land" role="LandRole">
      <div>
        {matrix.map((elm, index) => (
          <Row key={index} content={elm} order={index}></Row>
        ))}
      </div>
    </div>
  );
};

export default Land;
