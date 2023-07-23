import React from 'react';
import Box from '../Box/Box';
import './Row.css';

type RowPropsType = {
  content: number[];
  order: number;
};

export const Row = ({ content, order }: RowPropsType) => {
  return (
    <div className="row" role="RowRole">
      {content.map((isLife, index) => (
        <Box
          isLife={!!isLife}
          x={order}
          y={index}
          key={`${order}-${index}`}
        ></Box>
      ))}
    </div>
  );
};
