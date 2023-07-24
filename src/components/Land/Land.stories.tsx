import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../RTK/store';
import Land from './Land';

export default {
  title: 'Land',
  component: Land,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
};

const Template = (arg) => <Land {...arg} />;

export const Default = Template.bind({});
Default.args = {};
