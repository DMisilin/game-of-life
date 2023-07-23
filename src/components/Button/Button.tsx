import React from 'react';

type ButtonPropsType = {
  name: string;
  text: string;
  click: () => void;
};

const Button = ({ name, text, click }: ButtonPropsType) => {
  return (
    <button className={name} onClick={click} key={`${name}-${text}`}>
      {text}
    </button>
  );
};

export default Button;
