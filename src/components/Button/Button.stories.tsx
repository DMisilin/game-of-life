import React from 'react';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    text: {
      type: 'string',
      description: 'Кнопка',
      default: 'Button',
    },
    onClick: {
      type: 'function',
      description: 'Функция на событие `() => void`',
    },
  },
};

const Template = (arg) => <Button {...arg} />;

export const Default = Template.bind({});
Default.args = { name: 'Storybook', text: 'My button' };
