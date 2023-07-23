import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../RTK/store';
import Panel from '../Panel/Panel';

export default {
  title: 'Panel',
  component: Panel,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
};

const Template = (arg) => <Panel {...arg} />;

export const Default = Template.bind({});
Default.args = {};
