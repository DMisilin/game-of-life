import React from 'react';
import './Button.css';

type ButtonPropsType = {
  name: string;
  text: string;
  click: () => void;
};

const Button = ({ name, text, click }: ButtonPropsType) => {
  return (
    <button className="btn" onClick={click} key={`${name}-${text}`}>
      {text}
    </button>
  );
};

export default Button;
