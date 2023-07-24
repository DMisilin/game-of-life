import React from 'react';
import { Row } from './Row';
import { Provider } from 'react-redux';
import { store } from '../../RTK/store';
import { generateLand } from '../../helpers/methods';

const content = generateLand(10, 10);

export default {
  title: 'Row',
  component: Row,
  argTypes: {
    content: {
      type: 'Array',
      description: 'Контент для отрисовки блоков',
    },
    order: {
      type: 'number',
      description:
        'Порядковый индекс строки (не влияет на визуальную часть, используется при создании и обновлении игрового поля)',
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

const Template = (arg) => <Row {...arg} />;

export const Default = Template.bind({});
Default.args = { content: content[0] };
