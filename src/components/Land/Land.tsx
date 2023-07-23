import React from 'react';
import { useSelector } from 'react-redux';
import { StateType } from 'src/helpers/types';
import { Row } from 'components/Row';

const Land = () => {
  const matrix = useSelector((state: StateType) => {
    return state.game.boxesMatrix;
  });

  return (
    <div>
      <div className="land">
        {matrix.map((elm, index) => (
          <Row key={index} content={elm} order={index}></Row>
        ))}
      </div>
    </div>
  );
};

export default Land;
