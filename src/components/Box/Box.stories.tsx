import React from 'react';
import { Provider } from 'react-redux';

import Box from './Box';
import { store } from '../../RTK/store';

export default {
  title: 'Box',
  component: Box,
  argTypes: {
    isLife: {
      type: 'boolean',
      description: 'Флаг жизни',
      options: [false, true],
      control: {
        type: 'radio',
      },
    },
    x: {
      type: 'number',
      description: 'Координата по оси X',
    },
    y: {
      type: 'number',
      description: 'Координата по оси Y',
    },
  },
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
};

const Template = (arg) => <Box {...arg} />;

export const Default = Template.bind({});
Default.args = {};
