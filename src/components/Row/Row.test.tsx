import React from 'react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { renderWithProviders } from '../../RTK/test-utils';
import { Row } from './Row';

describe('Row element', () => {
  const rowContent = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  test('To be in document', () => {
    renderWithProviders(
      <Row
      content={rowContent}
      order={1}/>
    );

    expect(screen.getByRole('RowRole')).toBeInTheDocument();
  });

  test('Box count in row', () => {
    renderWithProviders(
      <Row
        content={rowContent}
        order={1}/>
    );

    expect(screen.getAllByRole('BoxRole').length).toBe(rowContent.length);
  });
});
