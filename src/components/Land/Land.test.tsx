import React from 'react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { renderWithProviders } from '../../RTK/test-utils';
import Land from 'components/Land/Land';

describe('Land element', () => {
  test('To be in document, with some text', () => {
    renderWithProviders(<Land />);
    expect(screen.getByRole('LandRole')).toBeInTheDocument();
  });

  test('Check count of rows', () => {
    renderWithProviders(<Land />);
    expect(screen.getAllByRole('RowRole').length).toBe(20);
  });

  test('Check count of boxes', () => {
    renderWithProviders(<Land />);
    expect(screen.getAllByRole('BoxRole').length).toBe(400);
  });
});
